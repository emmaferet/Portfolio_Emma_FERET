import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectArticle } from './project-article';

describe('ProjectArticle', () => {
  let component: ProjectArticle;
  let fixture: ComponentFixture<ProjectArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectArticle],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectArticle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
