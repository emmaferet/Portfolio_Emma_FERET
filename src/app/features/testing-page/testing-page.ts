import { Component, inject, OnInit } from '@angular/core';
import { HighlightDirective } from '@core/directives/highlight';
import { TranslatePipe } from '@ngx-translate/core';
import { StorageService } from '@shared/services/storage/storage.service';
import { SwitchThemeButton } from './components/switch-theme-button/switch-theme-button';

@Component({
  selector: 'app-testing-page',
  imports: [HighlightDirective, SwitchThemeButton, TranslatePipe],
  templateUrl: './testing-page.html',
  styleUrl: './testing-page.scss',
})
export class TestingPage implements OnInit {
  isDarkMode = false;
  private readonly THEME_KEY = 'testing-page-dark-mode';

  storage = inject(StorageService);

  ngOnInit(): void {
    const savedTheme = this.storage.getItem(this.THEME_KEY);
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'true';
    }
  }

  // Updated to receive directly the boolean from the output
  toggleTheme(darkModeEnabled: boolean): void {
    this.isDarkMode = darkModeEnabled;
    this.storage.setItem(this.THEME_KEY, String(this.isDarkMode));
  }

  resetTheme(): void {
    this.isDarkMode = false;
    this.storage.removeItem(this.THEME_KEY);
  }
}
