import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceArticle } from './experience-article';

describe('ExperienceArticle', () => {
  let component: ExperienceArticle;
  let fixture: ComponentFixture<ExperienceArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceArticle],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceArticle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
