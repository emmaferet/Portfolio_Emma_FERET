import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  downloadCv() {
    const link = document.createElement('a');
    link.href = '@files/CVWebDev_EmmaFERET.pdf';
    link.download = 'CVWebDev_EmmaFERET.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
