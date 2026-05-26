import { Component, input } from '@angular/core';
import { Skills } from '@core/models/interfaces/my-cv.interface';
import { SkillTypeEnum } from './../../../core/models/enums/skillType.enum';

@Component({
  selector: 'app-skills-section',
  imports: [],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss',
})
export class SkillsSection {
  // object ?
  titleSection = input<string>();
  subtitleSection = input<string>();
  skillTypeEnum = SkillTypeEnum;
  // currentArticleRightPurpleBox = input.required<Skills[]>();
  // currentArticleLeftWhiteBox = input.required<Skills[]>();
  // currentArticleLeftWhiteBox = input.required<MyCv>();
  // currentArticleLeftWhiteBoxTEST = MyCvInfos;

  // currentArticleSkillsForm1 = input<myCv>();
  // boucle pour import les currentArticleSkills
  userSkills = input.required<Skills[] | undefined>();
}
