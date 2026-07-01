import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  // Private
  private translateService = inject(TranslateService);
  private readonly STORAGE_KEY = 'app_language';
  private allowedLang = ['fr', 'en'];

  // Public
  // Signal contenant la langue actuellement utilisée.
  // Tous les composants qui utilisent ce signal seront mis à jour
  // automatiquement lorsqu'il changera.
  public currentLang = signal<string>('fr');

  private get storage(): Storage | null {
    return typeof localStorage !== 'undefined' ? localStorage : null;
  }

  constructor() {
    this.initLanguage();
  }

  private initLanguage(): void {
    // Lecture de la langue sauvegardée.
    const savedLang = this.storage?.getItem(this.STORAGE_KEY) ?? null;
    // Détection de la langue du navigateur.
    const browserLang = this.translateService.getBrowserLang() || this.currentLang();
    // Choix de la langue finale.
    const usedLang =
      savedLang || (this.allowedLang.includes(browserLang) ? browserLang : this.currentLang());

    // Langue utilisée si une traduction est absente.
    this.translateService.setFallbackLang(this.currentLang());

    this.setLanguage(usedLang);
  }

  setLanguage(lang: string): void {
    // Charge les traductions de la langue demandée.
    this.translateService.use(lang);
    // Sauvegarde le choix de l'utilisateur.
    this.storage?.setItem(this.STORAGE_KEY, lang);
    // Met à jour le Signal réactif.
    this.currentLang.set(lang);
  }
}
