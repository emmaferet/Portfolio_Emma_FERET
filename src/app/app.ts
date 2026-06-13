import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { Footer } from '@shared/components/footer/footer';
import { Header } from '@shared/components/header/header';
import { Loader } from '@shared/components/loader/loader';
import { UserService } from '@shared/services/user/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Loader  ],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('EmmaFeretPortofolio');

  private userService = inject(UserService);

  loading = signal<boolean>(true);
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loading.set(true);
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loading.set(false);
      }
    });
  }
  appUser = toSignal(this.userService.getUser(), {
    initialValue: undefined,
  });
}
