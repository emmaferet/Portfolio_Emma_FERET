import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ArticleProperties } from '@core/models/interfaces/article-prototype.interface';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-article-prototype',
  imports: [TranslatePipe],
  templateUrl: './article-prototype.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './article-prototype.scss',
})
export class ArticlePrototype {
  currentArticle = input.required<ArticleProperties>();
}
