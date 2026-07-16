import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { LoaderData } from '@shared/components/loader-data/loader-data';
import { ProjectArticle } from '@shared/components/project-article/project-article';
import { ProjectsService } from '@shared/services/projects/projects.service';
import { SidePhotoArticleEnum } from './../../core/models/enums/side-photo-article.enum';

@Component({
  selector: 'app-projects-page',
  imports: [ProjectArticle, LoaderData],
  templateUrl: './projects-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './projects-page.scss',
})
export class ProjectsPage {
  private projectService = inject(ProjectsService);

  sidePhotoArticleEnum = SidePhotoArticleEnum;

  userProjects = toSignal(this.projectService.getMyProjects());

  // computed() creates a "derived" signal: its value is automatically
  // recalculated whenever a signal it reads changes
  // isLoading is true only while userProjects() is still undefined,
  // meaning neither a response nor an error has arrived yet.
  isLoading = computed(() => this.userProjects() === undefined);
}
