import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SidePhotoArticleEnum } from '@core/models/enums/side-photo-article.enum';
import { Projects } from '@core/models/interfaces/projects.interfaces';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-project-article',
  imports: [TranslatePipe],
  templateUrl: './project-article.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './project-article.scss',
})
export class ProjectArticle {
  userProject = input.required<Projects | undefined>();
  sidePhotoArticleEnum = SidePhotoArticleEnum;
  sidePhotoArticle = input<SidePhotoArticleEnum>(SidePhotoArticleEnum.DISPLAYLEFT);
}
