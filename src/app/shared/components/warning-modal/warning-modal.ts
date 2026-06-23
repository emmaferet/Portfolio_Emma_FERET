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
  selector: 'app-warning-modal',
  imports: [MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, TranslatePipe],
  templateUrl: './warning-modal.html',
  styleUrl: './warning-modal.scss',
})
export class WarningModal {
  public dialogRef = inject(MatDialogRef);

  closeModal(): void {
    this.dialogRef.close();
  }
}
