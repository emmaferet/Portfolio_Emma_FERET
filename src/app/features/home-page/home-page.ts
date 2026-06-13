import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { ArticlePrototype } from '@shared/components/article-prototype/article-prototype';
import { ContactSection } from '@shared/components/contact-section/contact-section';
import { HomePageIntroduction } from '@shared/components/home-page-introduction/home-page-introduction';
import { OpeningModal } from '@shared/components/opening-modal/opening-modal';
import { SkillsSection } from '@shared/components/skills-section/skills-section';
import { SkillsService } from './../../shared/services/skills/skills.service';

@Component({
  selector: 'app-home-page',
  imports: [ArticlePrototype, HomePageIntroduction, SkillsSection, ContactSection],
  templateUrl: './home-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home-page.scss',
  standalone: true,
})
export class HomePage {
  private skillService = inject(SkillsService);

  userSkills = toSignal(this.skillService.getSkills());

  public dialog = inject(MatDialog);

  // To test the modal
  // openModal(): void {
  //   this.dialog.open(OpeningModal);
  //   console.log('click');
  // }
  ngOnInit(): void {
    const seen = localStorage.getItem('welcomeModalSeen');

    if (!seen) {
      localStorage.setItem('welcomeModalSeen', 'true');
      this.dialog.open(OpeningModal);
    }
  }
}
