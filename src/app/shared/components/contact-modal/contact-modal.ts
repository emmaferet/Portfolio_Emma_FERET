import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-modal',
  imports: [MatDialogActions, MatDialogClose, MatDialogContent, TranslatePipe],
  templateUrl: './contact-modal.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './contact-modal.scss',
})
export class ContactModal {
  // MatDialogRef (angular class) properties injection
  public dialogRef = inject(MatDialogRef);

  closeModal(): void {
    this.dialogRef.close();
  }
}
