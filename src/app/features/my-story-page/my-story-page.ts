import { Component, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Biography } from '@shared/components/biography/biography';
import { ExperienceArticle } from '@shared/components/experience-article/experience-article';
import { MyStoryFormations } from '@shared/components/my-story-formations/my-story-formations';
import { FormationService } from '@shared/services/formation/formation.service';
import { UserService } from '@shared/services/user/user.service';
import { ExperienceService } from './../../shared/services/experience/experience.service';

@Component({
  selector: 'app-my-story-page',
  imports: [MyStoryFormations, ExperienceArticle, Biography],
  templateUrl: './my-story-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './my-story-page.scss',
})
export class MyStoryPage {
  private userService = inject(UserService);

  userInfos = toSignal(this.userService.getUser(), {
    initialValue: undefined,
  });

  private formationService = inject(FormationService);

  userFormations = toSignal(this.formationService.getFormations(), {
    initialValue: undefined,
  });

  private experienceService = inject(ExperienceService);

  userExperiences = toSignal(this.experienceService.getExperiences(), {
    initialValue: undefined,
  });
  reversedExperiencesList = computed(() => this.userExperiences()?.slice().reverse() ?? []);
}
