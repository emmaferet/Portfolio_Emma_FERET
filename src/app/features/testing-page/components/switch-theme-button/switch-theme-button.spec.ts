import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchThemeButton } from './switch-theme-button';

describe('SwitchThemeButton', () => {
  let component: SwitchThemeButton;
  let fixture: ComponentFixture<SwitchThemeButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchThemeButton],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchThemeButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
