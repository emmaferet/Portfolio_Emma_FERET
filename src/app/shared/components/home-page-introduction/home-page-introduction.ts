import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page-introduction',
  imports: [RouterLink],
  templateUrl: './home-page-introduction.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home-page-introduction.scss',
})
export class HomePageIntroduction {}
