import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from './translation.service';

// Describe : expliquer ou décrire quelque chose de façon claire.
describe('TranslationService', () => {
  let service: TranslationService;
  // Mock : simuler un comportement pour tester une partie du code/instancie pour de faux.
  let translateServiceMock: jest.Mocked<TranslateService>;

  // BeforeEach : exécuter une préparation avant chaque test.
  beforeEach(() => {
    translateServiceMock = {
      // on mock les méthodes de TranslateService pour éviter les appels réels. pas besoin d'avoir le comportement réel de ces méthodes pour nos tests.
      use: jest.fn(),
      setFallbackLang: jest.fn(),
      getBrowserLang: jest.fn().mockReturnValue('fr'),
    } as unknown as jest.Mocked<TranslateService>;
    // on espionne la méthode getItem/setItem de Storage et on l'injecte dans le service pour retourner notre mock au lieu de l'instance réelle.
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => null);
    jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {});
    TestBed.configureTestingModule({
      providers: [
        TranslationService,
        // On fournit notre mock à la place du vrai TranslateService
        { provide: TranslateService, useValue: translateServiceMock },
      ],
    });
  });

  // Après chaque test, on reset les mocks pour éviter les effets de bord entre les tests.
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should be created', () => {
    // TestBed crée le service DANS le contexte d'injection → inject() fonctionne ✅
    service = TestBed.inject(TranslationService);

    expect(service).toBeTruthy();
  });

  it('should initialize with default language if storage and browserLang are empty', () => {
    // Arrange : configure l'environnement de test
    translateServiceMock.getBrowserLang.mockReturnValue(undefined);

    service = TestBed.inject(TranslationService);
    // Act : execute le code à tester
    // fake le comportement du service
    expect(translateServiceMock.setFallbackLang).toHaveBeenCalledWith('fr');
    expect(translateServiceMock.use).toHaveBeenCalledWith('fr');
    // Assert : vérifie les résultats
    // verifie que la langue courante est bien 'fr' comme prévu dans le service
    expect(service.currentLang()).toBe('fr');
  });

  it('should initialize with saved language from local storage if present', () => {
    // Arrange
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValue('en');

    service = TestBed.inject(TranslationService);
    // Act
    expect(translateServiceMock.setFallbackLang).toHaveBeenCalledWith('fr');
    expect(translateServiceMock.use).toHaveBeenCalledWith('en');
    // Assert
    expect(service.currentLang()).toBe('en');
  });

  // Meme test qu'au dessus mais avec plusieurs langues possibles
  it.each(['en', 'fr'])(
    'should initialize with saved language from local storage if present',
    (language) => {
      // Arrange
      jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(language);

      // Act
      service = TestBed.inject(TranslationService);

      expect(translateServiceMock.setFallbackLang).toHaveBeenCalledWith('fr');
      expect(translateServiceMock.use).toHaveBeenCalledWith(language);
      // Assert
      expect(service.currentLang()).toBe(language);
    },
  );
  it('should fallback to default language if browser language is not allowed', () => {
    // Arrange
    translateServiceMock.getBrowserLang.mockReturnValue('es');

    // Act
    service = TestBed.inject(TranslationService);
    expect(translateServiceMock.setFallbackLang).toHaveBeenCalledWith('fr');
    expect(translateServiceMock.use).toHaveBeenCalledWith('fr');

    // Assert
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
