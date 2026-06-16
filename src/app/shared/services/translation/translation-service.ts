import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private translateService = inject(TranslateService);

  private readonly STORAGE_KEY = 'app_language';
  public currentLang = signal<string>('fr');
  private allowedLang = ['fr', 'en'];

  private get storage(): Storage | null {
    return typeof localStorage !== 'undefined' ? localStorage : null;
  }

  constructor() {
    this.initLanguage();
  }

  private initLanguage(): void {
    const savedLang = this.storage?.getItem(this.STORAGE_KEY) ?? null;
    const browserLang = this.translateService.getBrowserLang() || this.currentLang();
    const usedLang =
      savedLang || (this.allowedLang.includes(browserLang) ? browserLang : this.currentLang());

    this.translateService.setFallbackLang(this.currentLang());
    this.setLanguage(usedLang);
  }

  setLanguage(lang: string): void {
    this.translateService.use(lang);
    this.storage?.setItem(this.STORAGE_KEY, lang);
    this.currentLang.set(lang);
  }
}
