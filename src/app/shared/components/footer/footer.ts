import { Component, input } from '@angular/core';
import { User } from '@core/models/interfaces/user.interface';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  footerUser = input.required<User | undefined>();
  // listNavigationFooter = input.required<ListNavigation[]>();

  downloadCv() {
    const link = document.createElement('a');
    link.href = '@files/CVWebDev_EmmaFERET.pdf';
    link.download = 'CVWebDev_EmmaFERET.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
