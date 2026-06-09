import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ListNavigation } from '@core/models/interfaces/listNavigation.interface';
import { User } from '@core/models/interfaces/user.interface';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslationService } from '@shared/services/translation/translation-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './header.scss',
})
export class Header {
  headerNavigation = input.required<ListNavigation[]>();

  nameTitle = input.required<User | undefined>();

  private router = inject(Router);

  private translation = inject(TranslationService);

  navigateToProject(route: string) {
    this.router.navigate([route]);
  }
}
