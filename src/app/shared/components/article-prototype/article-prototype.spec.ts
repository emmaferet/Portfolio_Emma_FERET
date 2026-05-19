import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePrototype } from './article-prototype';

describe('ArticlePrototype', () => {
  let component: ArticlePrototype;
  let fixture: ComponentFixture<ArticlePrototype>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlePrototype],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticlePrototype);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
