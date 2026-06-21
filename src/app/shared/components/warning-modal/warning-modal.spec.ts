import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningModal } from './warning-modal';

describe('WarningModal', () => {
  let component: WarningModal;
  let fixture: ComponentFixture<WarningModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarningModal],
    }).compileComponents();

    fixture = TestBed.createComponent(WarningModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
