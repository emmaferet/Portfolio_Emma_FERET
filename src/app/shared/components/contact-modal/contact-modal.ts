import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-modal',
  imports: [],
  templateUrl: './contact-modal.html',
  styleUrl: './contact-modal.scss',
})
export class ContactModal {
  // 1st try with a constructor, it didn't work and didn't inject the properties properly
  // MatDialogRef(angular class) properties injection
  public dialogRef = inject(MatDialogRef);

  // Close the opened dialog, method within the dialog itself
  // close with esc already implemented in the ang mat
  closeModal(): void {
    this.dialogRef.close();
  }
}
