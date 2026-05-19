
import { Component } from '@angular/core';
import { ArticlePrototype } from '@shared/components/article-prototype/article-prototype';
import { HomePageIntroduction } from '@shared/components/home-page-introduction/home-page-introduction';


@Component({
  selector: 'app-home-page',
  imports: [ArticlePrototype,HomePageIntroduction],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
