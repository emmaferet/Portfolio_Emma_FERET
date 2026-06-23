import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Biography } from './biography';

describe('Biography', () => {
  let component: Biography;
  let fixture: ComponentFixture<Biography>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Biography],
    }).compileComponents();

    fixture = TestBed.createComponent(Biography);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
