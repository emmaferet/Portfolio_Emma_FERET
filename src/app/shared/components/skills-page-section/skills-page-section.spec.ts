import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsPageSection } from './skills-page-section';

describe('SkillsPageSection', () => {
  let component: SkillsPageSection;
  let fixture: ComponentFixture<SkillsPageSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsPageSection],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsPageSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
