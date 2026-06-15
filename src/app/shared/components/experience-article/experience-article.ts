import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CvExperience } from '@core/models/interfaces/cvExperience.interface';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-experience-article',
  imports: [TranslatePipe],
  templateUrl: './experience-article.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './experience-article.scss',
})
export class ExperienceArticle {
  userExperience = input.required<CvExperience | undefined>();
}
