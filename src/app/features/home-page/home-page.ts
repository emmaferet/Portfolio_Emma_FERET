import { Component } from '@angular/core';
import { ArticlePrototype } from '@shared/components/article-prototype/article-prototype';
import { HomePageIntroduction } from '@shared/components/home-page-introduction/home-page-introduction';
import { SkillsSection } from '@shared/components/skills-section/skills-section';

@Component({
  selector: 'app-home-page',
  imports: [ArticlePrototype, HomePageIntroduction, SkillsSection],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
