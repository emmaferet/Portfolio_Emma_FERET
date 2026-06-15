import { Component, inject } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-opening-modal',
  imports: [MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, TranslatePipe],
  templateUrl: './opening-modal.html',
  styleUrl: './opening-modal.scss',
  standalone: true,
})
export class OpeningModal {
  public dialogRef = inject(MatDialogRef);

  closeModal(): void {
    this.dialogRef.close();
  }
}
