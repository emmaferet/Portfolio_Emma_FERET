import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderData } from './loader-data';

describe('LoaderData', () => {
  let component: LoaderData;
  let fixture: ComponentFixture<LoaderData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderData],
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
