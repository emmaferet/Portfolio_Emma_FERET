import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { Skills } from '@core/models/interfaces/skills.interface';
import { SkillTypeEnum } from './../../../core/models/enums/skillType.enum';

@Component({
  selector: 'app-skills-section',
  imports: [],
  templateUrl: './skills-section.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './skills-section.scss',
})
export class SkillsSection {
  // object ?
  titleSection = input<string>();
  subtitleSection = input<string>();
  skillTypeEnum = SkillTypeEnum;

  userSkills = input.required<Skills[] | undefined>();
}
