import { Component, input, OnInit } from '@angular/core';
import { CvSkills } from '@core/models/interfaces/my-cv.interface';

@Component({
  selector: 'app-skills-section',
  imports: [],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss',
})
export class SkillsSection implements OnInit {
  // object ?
  titleSection = input();
  subtitleSection = input();
  currentArticleRightPurpleBox = input.required<CvSkills[]>();
  currentArticleLeftWhiteBox = input.required<CvSkills[]>();
  // currentArticleLeftWhiteBox = input.required<MyCv>();
  // currentArticleLeftWhiteBoxTEST = MyCvInfos;

  // currentArticleSkillsForm1 = input<myCv>();
  // boucle pour import les currentArticleSkills
  ngOnInit(): void {}
}
