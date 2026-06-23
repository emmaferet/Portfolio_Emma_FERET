import { Component } from '@angular/core';
import { HighlightDirective } from '@core/directives/highlight';

@Component({
  selector: 'app-testing-page',
  imports: [HighlightDirective],
  templateUrl: './testing-page.html',
  styleUrl: './testing-page.scss',
})
export class TestingPage {}
