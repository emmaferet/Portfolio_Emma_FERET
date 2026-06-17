import { ChangeDetectionStrategy, Component, ElementRef, input, QueryList, ViewChildren } from '@angular/core';
import { Formations } from '@core/models/interfaces/cvFormation.interface';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-my-story-formations',
  imports: [TranslatePipe],
  templateUrl: './my-story-formations.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './my-story-formations.scss',
})
export class MyStoryFormations {
  userFormations = input.required<Formations | undefined>();

  @ViewChildren('formationCard')
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
