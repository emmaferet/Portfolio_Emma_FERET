import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  imports: [],
  templateUrl: './contact-section.html',
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
