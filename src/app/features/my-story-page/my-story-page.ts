import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MyStoryFormations } from '@shared/components/my-story-formations/my-story-formations';
import { FormationService } from '@shared/services/formation/formation.service';

@Component({
  selector: 'app-my-story-page',
  imports: [MyStoryFormations],
  templateUrl: './my-story-page.html',
  styleUrl: './my-story-page.scss',
})
export class MyStoryPage {
  private userService = inject(FormationService);

  userFormations = toSignal(this.userService.getFormations(), {
    initialValue: undefined,
  });
}
