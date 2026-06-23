import { TestBed } from '@angular/core/testing';

import { Formation } from './formation.service';

describe('Formation', () => {
  let service: Formation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Formation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
