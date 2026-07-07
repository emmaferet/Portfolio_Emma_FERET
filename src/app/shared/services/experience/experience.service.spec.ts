import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CvExperience } from '@core/models/interfaces/cv-experience.interface';
import { environment } from '@environments/environments';
import { ExperienceService } from './experience.service';

describe('Experience', () => {
  let service: ExperienceService;
  // let expServiceMock: jest.Mocked<ExperienceService>;

  // HttpTestingController: intercepts HTTP requests fired by HttpClient so we
  // can inspect them and provide fake responses, instead of hitting a real API.
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        // ExperienceService is the real service under test: we never mock it,
        // otherwise we'd only be testing our own mock instead of real code.
        ExperienceService,
        // provideHttpClient(): provides the real HttpClient API surface so the
        // service can be injected normally.
        provideHttpClient(),
        // provideHttpClientTesting(): swaps the real HTTP backend for a testing
        // backend that intercepts requests instead of sending them over the network.
        provideHttpClientTesting(),
      ],
    });
    // We inject the real service (not a mock) so its actual methods run.
    service = TestBed.inject(ExperienceService);
    // We inject the controller that lets us intercept and respond to requests
    // made internally by the service via HttpClient.
    httpController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all experiences via GET request', () => {
    //Arrange
    const mockExperiences: CvExperience[] = [
      {
        id: 1,
        title: 'Développeuse Frontend',
        company: 'BurgerKing',
        duration: '2022 - 2023',
        description: 'Développement de fonctionnalités Angular',
        link: 'https://burgerking.example.com',
      },
      {
        id: 2,
        title: 'Ingénieure Full Stack',
        company: 'RenrakuDynamics',
        duration: '2021 - 2022',
        description: "Conception et maintenance d'applications web",
        link: 'https://renraku.example.com',
      },
    ];

    // Act: call the real service method. Since it returns an Observable,
    // nothing actually happens until we subscribe.
    // Assert (inside the subscribe callback): this callback only runs once
    // the intercepted request is "flushed" below, so the assertion is asynchronous relative to the code that triggers it.
    service
      .getExperiences()
      .subscribe((experiences) => expect(experiences).toEqual(mockExperiences));
    // expectOne: assert that exactly one pending request was made to this URL,
    // and capture it so we can control its response.
    // flush: simulate the server responding with our fake data. This is what
    // actually triggers the subscribe callback above (and its assertion).
    httpController.expectOne(`${environment.apiUrl}/experiences`).flush(mockExperiences);
    //Assert
  });

  it('should retrieve experience by id via GET request', () => {
    const mockExperience: CvExperience = {
      id: 1,
      title: 'Développeuse Frontend',
      company: 'BurgerKing',
      duration: '2022 - 2023',
      description: 'Développement de fonctionnalités Angular',
      link: 'https://burgerking.example.com',
    };
    //Act
    service
      .getExperienceById(1)
      .subscribe((experiences) => expect(experiences).toEqual(mockExperience));

    httpController.expectOne(`${environment.apiUrl}/experiences/1`).flush(mockExperience);
  });

  // it('should handle HTTP error when fetching experiences', () => {});
});
