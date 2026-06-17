import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { OpeningModal } from '../opening-modal/opening-modal';

@Component({
  selector: 'app-home-page-introduction',
  imports: [RouterLink, TranslatePipe, OpeningModal],
  templateUrl: './home-page-introduction.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './home-page-introduction.scss',
})
export class HomePageIntroduction {
  constructor(public dialog: MatDialog) {}

  openModal(): void {
    this.dialog.open(OpeningModal);
  }
}
