import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-section',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './contact-section.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './contact-section.scss',
})
export class ContactSection {
  downloadCv() {
    const link = document.createElement('a');
    link.href = '@files/CVWebDev_EmmaFERET.pdf';
    link.download = 'CVWebDev_EmmaFERET.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
