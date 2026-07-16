import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ArticlePrototype } from '@shared/components/article-prototype/article-prototype';
import { ContactSection } from '@shared/components/contact-section/contact-section';
import { HomePageIntroduction } from '@shared/components/home-page-introduction/home-page-introduction';
import { IaHomePage } from '@shared/components/ia-home-page/ia-home-page';
import { LoaderData } from '@shared/components/loader-data/loader-data';
import { SkillsSection } from '@shared/components/skills-section/skills-section';
import { SkillsService } from './../../shared/services/skills/skills.service';

@Component({
  selector: 'app-home-page',
  imports: [
    ArticlePrototype,
    HomePageIntroduction,
    SkillsSection,
    ContactSection,
    IaHomePage,
    LoaderData,
  ],
  templateUrl: './home-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home-page.scss',
  standalone: true,
})
export class HomePage {
  private skillService = inject(SkillsService);

  userSkills = toSignal(this.skillService.getSkills());

  isLoading = computed(() => this.userSkills() === undefined);
}
