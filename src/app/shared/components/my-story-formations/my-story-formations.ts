import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { Formations } from '@core/models/interfaces/cvFormation.interface';

@Component({
  selector: 'app-my-story-formations',
  imports: [],
  templateUrl: './my-story-formations.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './my-story-formations.scss',
})
export class MyStoryFormations {
  userFormations = input.required<Formations[] | undefined>();
}
