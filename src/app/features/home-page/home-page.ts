import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ArticlePrototype } from '@shared/components/article-prototype/article-prototype';
import { ContactSection } from '@shared/components/contact-section/contact-section';
import { HomePageIntroduction } from '@shared/components/home-page-introduction/home-page-introduction';
import { SkillsSection } from '@shared/components/skills-section/skills-section';
import { SkillsService } from './../../shared/services/skills/skills.service';

@Component({
  selector: 'app-home-page',
  imports: [ArticlePrototype, HomePageIntroduction, SkillsSection, ContactSection],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  private skillService = inject(SkillsService);

  userSkills = toSignal(this.skillService.getSkills());
}
