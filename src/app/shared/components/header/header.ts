import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostListener,
  inject,
  input,
  signal,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ListNavigation } from '@core/models/interfaces/list-navigation.interface';
import { User } from '@core/models/interfaces/user.interface';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslationService } from '@services/translation/translation.service';

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

  isEnglish = computed(() => this.translation.currentLang() === 'en');

  isMobile = signal(false);
  burgerOpen = signal(false);

  private router = inject(Router);

  private translation = inject(TranslationService);

  navigateToProject(route: string) {
    this.router.navigate([route]);
  }

  switchLanguage() {
    const lang = this.translation.currentLang();
    this.translation.setLanguage(lang === 'fr' ? 'en' : 'fr');
  }

  constructor() {
    this.checkScreen();
  }

  @HostListener('window:resize')
  checkScreen() {
    this.isMobile.set(window.innerWidth <= 1206);
  }

  openBurger() {
    this.burgerOpen.set(true);
  }

  closeBurger() {
    this.burgerOpen.set(false);
  }

  toggleBurger() {
    this.burgerOpen.update((v) => !v);
  }
}
