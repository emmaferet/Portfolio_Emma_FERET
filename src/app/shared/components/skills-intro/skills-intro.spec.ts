import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsIntro } from './skills-intro';

describe('SkillsIntro', () => {
  let component: SkillsIntro;
  let fixture: ComponentFixture<SkillsIntro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsIntro],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsIntro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
