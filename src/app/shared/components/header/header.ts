import { Component, inject, input, ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ListNavigation } from '@core/models/interfaces/listNavigation.interface';
import { User } from '@core/models/interfaces/user.interface';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './header.scss',
})
export class Header {
  headerNavigation = input.required<ListNavigation[]>();

  nameTitle = input.required<User | undefined>();

  private router = inject(Router);

  navigateToProject(route: string) {
    this.router.navigate([route]);
  }
}
