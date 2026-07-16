import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { LoaderData } from '@shared/components/loader-data/loader-data';
import { SkillsIntro } from '@shared/components/skills-intro/skills-intro';
import { SkillsPageSection } from '@shared/components/skills-page-section/skills-page-section';
import { SkillsService } from '@shared/services/skills/skills.service';

@Component({
  selector: 'app-my-skills-page',
  imports: [SkillsIntro, SkillsPageSection, LoaderData],
  templateUrl: './my-skills-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './my-skills-page.scss',
})
export class MySkillsPage {
  private skillService = inject(SkillsService);

  userSkills = toSignal(this.skillService.getSkills());

  isLoading = computed(() => this.userSkills() === undefined);
}
