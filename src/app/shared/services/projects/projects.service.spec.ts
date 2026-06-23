import { TestBed } from '@angular/core/testing';

import { Projects } from './projects.service';

describe('Projects', () => {
  let service: Projects;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Projects);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
