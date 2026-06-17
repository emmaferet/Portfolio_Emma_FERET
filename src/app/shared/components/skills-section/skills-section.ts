import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Skills } from '@core/models/interfaces/skills.interface';
import { TranslatePipe } from '@ngx-translate/core';
import { SkillTypeEnum } from './../../../core/models/enums/skillType.enum';

@Component({
  selector: 'app-skills-section',
  imports: [TranslatePipe],
  templateUrl: './skills-section.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './skills-section.scss',
})
export class SkillsSection {
  // object ?
  titleSection = input<string>();
  subtitleSection = input<string>();
  skillTypeEnum = SkillTypeEnum;

  userSkills = input.required<Skills[] | undefined>();

  @ViewChildren('skillCard')
  cards!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    this.cards.forEach((card) => {
      observer.observe(card.nativeElement);
    });
  }
}
