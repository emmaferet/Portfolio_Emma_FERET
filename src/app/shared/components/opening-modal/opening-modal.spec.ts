import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningModal } from './opening-modal';

describe('OpeningModal', () => {
  let component: OpeningModal;
  let fixture: ComponentFixture<OpeningModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpeningModal],
    }).compileComponents();

    fixture = TestBed.createComponent(OpeningModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
