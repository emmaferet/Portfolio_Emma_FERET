import { Component, input } from '@angular/core';
import { SidePhotoArticleEnum } from '@core/models/enums/side-photo-article.enum';
import { Projects } from '@core/models/interfaces/projects.interfaces';

@Component({
  selector: 'app-project-article',
  imports: [],
  templateUrl: './project-article.html',
  styleUrl: './project-article.scss',
})
export class ProjectArticle {
  userProject = input.required<Projects | undefined>();
  sidePhotoArticleEnum = SidePhotoArticleEnum;
  sidePhotoArticle = input<SidePhotoArticleEnum>(SidePhotoArticleEnum.DISPLAYLEFT);
}
