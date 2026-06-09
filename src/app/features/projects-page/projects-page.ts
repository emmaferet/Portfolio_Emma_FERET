import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjectArticle } from '@shared/components/project-article/project-article';
import { ProjectsService } from '@shared/services/projects/projects.service';
import { SidePhotoArticleEnum } from './../../core/models/enums/side-photo-article.enum';

@Component({
  selector: 'app-projects-page',
  imports: [ProjectArticle],
  templateUrl: './projects-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './projects-page.scss',
})
export class ProjectsPage {
  private projectService = inject(ProjectsService);

  sidePhotoArticleEnum = SidePhotoArticleEnum;

  userProjects = toSignal(this.projectService.getMyProjects());
}
