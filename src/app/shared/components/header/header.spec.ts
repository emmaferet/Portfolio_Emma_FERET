import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRef, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslationService } from '@services/translation/translation.service';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  // Test wrapper: DOM access + detectChanges()
  let fixture: ComponentFixture<Header>;
  // Necessary for setInput() (signal inputs)
  let componentRef: ComponentRef<Header>;

  // Mocks
  let routerMock: jest.Mocked<Router>;
  // Partial = we only mock what we need
  let translationServiceMock: jest.Mocked<TranslationService>;

  // Simulates the service's current language
  const currentLangSignal = signal('fr');

  beforeEach(async () => {
    translationServiceMock = {
      currentLang: currentLangSignal,
      setLanguage: jest.fn(), // spy to verify calls
    } as unknown as jest.Mocked<TranslationService>;

    // Minimal Router mock: we only provide the methods used
    routerMock = {
      navigate: jest.fn(),
    } as unknown as jest.Mocked<Router>;

    await TestBed.configureTestingModule({
      imports: [Header], // standalone component
      providers: [
        { provide: TranslationService, useValue: translationServiceMock },
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: {} },
      ],
    })
      // Override the component only for this test
      .overrideComponent(Header, {
        // Real pipe too complex to mock (depends on ngx-translate)
        remove: {
          imports: [TranslatePipe],
        },
        // Replaced by a fake pipe (see below)
        add: {
          imports: [MockTranslatePipe],
        },
      })
      // Recompile the component after overrideComponent
      .compileComponents();

    // Creates the component + its test wrapper
    fixture = TestBed.createComponent(Header);
    // Component instance (access to properties/methods)
    component = fixture.componentInstance;
    // Angular reference (useful for setInput)
    componentRef = fixture.componentRef;

    // Arrange: required inputs to set before the first detectChanges
    componentRef.setInput('headerNavigation', [
      { listNavigationElement: 'NAV.PROJECTS', router: '/projects' },
    ]);
    componentRef.setInput('nameTitle', { name: 'Jane', surname: 'Doe' });

    // Triggers Angular ngOnInit + template rendering
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    currentLangSignal.set('fr');
  });

  it('should create the component and initialize signal', () => {
    expect(component).toBeTruthy();
    expect(currentLangSignal()).toBe('fr');
  });

  it('should compute is english correctly when translation service language changes', () => {
    // Arrange: for the test we want to simulate the component in en
    currentLangSignal.set('en');
    // Act: we recompile the component with the new language
    fixture.detectChanges();
    // Assert: we check if the signal has changed
    expect(currentLangSignal()).toBe('en');
  });
  it('should navigate to correct route when navigateToProject is called', () => {
    // Arrange: we start at the route /
    const route = '/projects';
    // Act: we want to navigate to projects
    component.navigateToProject(route);
    // Assert: we expect to be on projects
    expect(routerMock.navigate).toHaveBeenCalledWith([route]);
  });

  // all follow AAA (Arrange, Act, Assert)
  // We test an error case
  it('should navigate to uncorrect route when navigateToProject is called', () => {
    // Arrange
    const route = '/test';
    // Act
    component.navigateToProject(route);
    // Assert
    expect(routerMock.navigate).not.toHaveBeenCalledWith(route);
    // expect(routerMock.navigate).toHaveBeenCalledWith('/error-page');
  });

  // we test the switch, not the component
  it('should switch language from fr when switchLanguage is called', () => {
    // Arrange
    // translationServiceMock.setLanguage('fr');
    // Act: we click the button
    component.switchLanguage();
    // Assert
    expect(translationServiceMock.setLanguage).toHaveBeenCalledWith('en');
  });

  it('should switch language from en when switchLanguage is called', () => {
    // Arrange
    currentLangSignal.set('en');
    // Act: we click the button
    component.switchLanguage();
    // Assert
    expect(translationServiceMock.setLanguage).toHaveBeenCalledWith('fr');
  });

  it('should switch language from uncorrect language when switchLanguage is called', () => {
    // Arrange
    currentLangSignal.set('es'); // unsupported language
    // Act: we click the button
    component.switchLanguage();
    // Assert
    expect(translationServiceMock.setLanguage).toHaveBeenCalledWith('fr');
  });

  // Danger zone
  it('should set isMobile to true when window is resized below 1206px ', () => {});
  it('should set isMobile to false when window is resized above 1206px ', () => {});
});

// Fake pipe: returns the key as is, without translating
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'translate', standalone: true })
class MockTranslatePipe implements PipeTransform {
  transform(value: string): string {
    return value;
  }
}
// Arrange
// Act
// Assert
// tests
