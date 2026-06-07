import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ExperienceArticle } from '@shared/components/experience-article/experience-article';
import { MyStoryFormations } from '@shared/components/my-story-formations/my-story-formations';
import { FormationService } from '@shared/services/formation/formation.service';
import { ExperienceService } from './../../shared/services/experience/experience.service';

@Component({
  selector: 'app-my-story-page',
  imports: [MyStoryFormations, ExperienceArticle],
  templateUrl: './my-story-page.html',
  styleUrl: './my-story-page.scss',
})
export class MyStoryPage {
  private userService = inject(FormationService);

  userFormations = toSignal(this.userService.getFormations(), {
    initialValue: undefined,
  });

  private experienceService = inject(ExperienceService);

  userExperiences = toSignal(this.experienceService.getExperiences(), {
    initialValue: undefined,
  });
  reversedExperiencesList = computed(() => {
    return this.userExperiences()?.reverse();
  });
}
