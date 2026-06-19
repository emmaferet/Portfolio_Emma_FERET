import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideTranslateService({
      fallbackLang: 'fr',
      loader: provideTranslateHttpLoader({
        prefix: './assets/i18n/',
        suffix: '.json',
      }),
    }),
  ],
};
