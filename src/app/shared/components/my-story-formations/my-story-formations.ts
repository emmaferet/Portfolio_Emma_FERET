import { ChangeDetectionStrategy, Component, input } from '@angular/core';
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
}
