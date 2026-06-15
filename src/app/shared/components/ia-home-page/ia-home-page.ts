import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-ia-home-page',
  imports: [TranslatePipe],
  templateUrl: './ia-home-page.html',
  styleUrl: './ia-home-page.scss',
})
export class IaHomePage {}
