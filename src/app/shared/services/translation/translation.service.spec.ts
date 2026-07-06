import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from './translation.service';

// Describe: explain or describe something clearly.
describe('TranslationService', () => {
  let service: TranslationService;
  // Mock: simulate a behavior to test a part of the code/fake instantiation.
  let translateServiceMock: jest.Mocked<TranslateService>;

  // BeforeEach: run a setup before each test.
  beforeEach(() => {
    translateServiceMock = {
      // we mock TranslateService's methods to avoid real calls. no need for the real behavior of these methods for our tests.
      use: jest.fn(),
      setFallbackLang: jest.fn(),
      getBrowserLang: jest.fn().mockReturnValue('fr'),
    } as unknown as jest.Mocked<TranslateService>;
    // we spy on Storage's getItem/setItem method and inject it into the service to return our mock instead of the real instance.
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => null);
    jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {});
    TestBed.configureTestingModule({
      providers: [
        TranslationService,
        // We provide our mock instead of the real TranslateService
        { provide: TranslateService, useValue: translateServiceMock },
      ],
    });
  });

  // After each test, we reset the mocks to avoid side effects between tests.
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should be created', () => {
    // TestBed creates the service WITHIN the injection context → inject() works ✅
    service = TestBed.inject(TranslationService);

    expect(service).toBeTruthy();
  });

  it('should initialize with default language if storage and browserLang are empty', () => {
    // Arrange: set up the test environment
    translateServiceMock.getBrowserLang.mockReturnValue(undefined);

    // Act: execute the code under test
    // fakes the service's behavior
    service = TestBed.inject(TranslationService);

    // Assert: check the results
    // verify that the current language is indeed 'fr' as expected in the service
    expect(translateServiceMock.setFallbackLang).toHaveBeenCalledWith('fr');
    expect(translateServiceMock.use).toHaveBeenCalledWith('fr');
    expect(service.currentLang()).toBe('fr');
  });

  it('should initialize with saved language from local storage if present', () => {
    // Arrange
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValue('en');

    // Act
    service = TestBed.inject(TranslationService);
    // Assert
    expect(translateServiceMock.setFallbackLang).toHaveBeenCalledWith('fr');
    expect(translateServiceMock.use).toHaveBeenCalledWith('en');
    expect(service.currentLang()).toBe('en');
  });

  // Same test as above but with several possible languages
  it.each(['en', 'fr'])(
    'should initialize with saved language from local storage if present',
    (language) => {
      // Arrange
      jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(language);

      // Act
      service = TestBed.inject(TranslationService);

      // Assert
      expect(translateServiceMock.setFallbackLang).toHaveBeenCalledWith('fr');
      expect(translateServiceMock.use).toHaveBeenCalledWith(language);
      expect(service.currentLang()).toBe(language);
    },
  );
  it('should fallback to default language if browser language is not allowed', () => {
    // Arrange
    translateServiceMock.getBrowserLang.mockReturnValue('es');

    // Act
    service = TestBed.inject(TranslationService);

    // Assert
    expect(translateServiceMock.setFallbackLang).toHaveBeenCalledWith('fr');
    expect(translateServiceMock.use).toHaveBeenCalledWith('fr');
    expect(service.currentLang()).toBe('fr');
  });

  it('should update language, local storage and signal when setLanguage is called', () => {
    // Arrange
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValue('en');

    // Act
    service = TestBed.inject(TranslationService);

    service.setLanguage('fr');

    // Assert
    expect(translateServiceMock.use).toHaveBeenCalledWith('fr');
    expect(Storage.prototype.setItem).toHaveBeenCalledWith('app_language', 'fr');
    expect(service.currentLang()).toBe('fr');
  });
});
