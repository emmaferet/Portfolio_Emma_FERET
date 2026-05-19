import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageIntroduction } from './home-page-introduction';

describe('HomePageIntroduction', () => {
  let component: HomePageIntroduction;
  let fixture: ComponentFixture<HomePageIntroduction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageIntroduction],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageIntroduction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
