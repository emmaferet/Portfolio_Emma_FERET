import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CvExperience } from '@core/models/interfaces/cvExperience.interface';

@Component({
  selector: 'app-experience-article',
  imports: [],
  templateUrl: './experience-article.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './experience-article.scss',
})
export class ExperienceArticle {
  userExperience = input.required<CvExperience | undefined>();
}
