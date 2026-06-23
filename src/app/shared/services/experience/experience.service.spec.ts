import { TestBed } from '@angular/core/testing';

import { Experience } from './experience.service';

describe('Experience', () => {
  let service: Experience;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experience);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
