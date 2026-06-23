import { inject, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
dayjs.locale('fr');
dayjs.locale('en');
@Pipe({
  name: 'formatDate',
  standalone: true,
  pure: false,
})
export class FormatDatePipe implements PipeTransform {
  translation = inject(TranslateService);

  transform(timestamp: number | undefined): string {
    if (!timestamp) {
      return '';
    }
    const siteLang = this.translation.currentLang();
    if (siteLang === 'fr') {
      return dayjs(timestamp).format('DD/MM/YYYY');
    } else if (siteLang === 'en') {
      return dayjs(timestamp).format('MM/DD/YYYY');
    }
    return '';
  }
}
