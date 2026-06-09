import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-modal',
  imports: [],
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
