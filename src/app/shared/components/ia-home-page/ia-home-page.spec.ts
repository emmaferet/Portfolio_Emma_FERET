import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaHomePage } from './ia-home-page';

describe('IaHomePage', () => {
  let component: IaHomePage;
  let fixture: ComponentFixture<IaHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IaHomePage],
    }).compileComponents();

    fixture = TestBed.createComponent(IaHomePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
