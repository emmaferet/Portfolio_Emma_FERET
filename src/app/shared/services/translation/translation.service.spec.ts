import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from './translation.service';

// Describe : expliquer ou décrire quelque chose de façon claire.
describe('TranslationService', () => {
  let service: TranslationService;
  // Mock : simuler un comportement pour tester une partie du code/instancie pour de faux.
  let translateServiceMock: jest.Mocked<Partial<TranslateService>>;

  // BeforeEach : exécuter une préparation avant chaque test.
  beforeEach(() => {
    translateServiceMock = {
      // on mock les méthodes de TranslateService pour éviter les appels réels. pas besoin d'avoir le comportement réel de ces méthodes pour nos tests.
      use: jest.fn(),
      setFallbackLang: jest.fn(),
      getBrowserLang: jest.fn().mockReturnValue('fr'),
    };
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
    // TestBed crée le service DANS le contexte d'injection → inject() fonctionne ✅
    service = TestBed.inject(TranslationService);
  });

  // Après chaque test, on reset les mocks pour éviter les effets de bord entre les tests.
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
