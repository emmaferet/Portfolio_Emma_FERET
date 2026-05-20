import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsSection } from './skills-section';

describe('SkillsSection', () => {
  let component: SkillsSection;
  let fixture: ComponentFixture<SkillsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsSection],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
