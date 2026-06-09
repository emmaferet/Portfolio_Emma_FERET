import { Component, input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ArticleProperties } from '@core/models/interfaces/article-prototype.interface';

@Component({
  selector: 'app-article-prototype',
  imports: [],
  templateUrl: './article-prototype.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './article-prototype.scss',
})
export class ArticlePrototype implements OnInit {
  currentArticle = input.required<ArticleProperties>();
  ngOnInit(): void {}
}
