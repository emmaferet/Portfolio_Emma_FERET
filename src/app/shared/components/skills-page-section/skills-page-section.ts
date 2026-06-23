import { Component, input } from '@angular/core';
import { SkillTypeEnum } from '@core/models/enums/skillType.enum';
import { Skills } from '@core/models/interfaces/skills.interface';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills-page-section',
  imports: [TranslatePipe],
  templateUrl: './skills-page-section.html',
  styleUrl: './skills-page-section.scss',
})
export class SkillsPageSection {
  titleSection = input<string>();
  subtitleSection = input<string>();
  skillTypeEnum = SkillTypeEnum;

  userSkills = input.required<Skills[] | undefined>();
}
