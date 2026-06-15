import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills-intro',
  imports: [TranslatePipe],
  templateUrl: './skills-intro.html',
  styleUrl: './skills-intro.scss',
})
export class SkillsIntro {}
