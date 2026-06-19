import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { form, FormField, pattern, required, validate } from '@angular/forms/signals';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormModel } from '@core/models/interfaces/contact-form-model.interface';
import { TranslatePipe } from '@ngx-translate/core';
import { ContactModal } from '@shared/components/contact-modal/contact-modal';
import { MailService } from '@shared/services/mail/mail-service';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FormField, TranslatePipe],
  templateUrl: './contact-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './contact-page.scss',
})
export class ContactPage {
  contactFormModel = signal<ContactFormModel>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  // Inject services
  public http = inject(HttpClient);
  public dialog = inject(MatDialog);
  public mailService = inject(MailService);

  contactForm = form(this.contactFormModel, (contact) => {
    required(contact.firstName, {
      message: 'CONTACT.ERRORS.FIRSTNAME_REQUIRED',
    });
    required(contact.lastName, { message: 'CONTACT.ERRORS.LASTNAME_REQUIRED' });
    required(contact.email, { message: 'CONTACT.ERRORS.EMAIL_REQUIRED' });
    required(contact.message, { message: 'CONTACT.ERRORS.MESSAGE_REQUIRED' });

    validate(contact.firstName, ({ value }) =>
      // ternary expression
      !/^[A-Za-zÀ-ÿ]{2,50}$/i.test(value())
        ? {
            kind: 'alphabet-only',
            message: 'CONTACT.ERRORS.FIRSTNAME_LENGTH',
          }
        : undefined,
    );
    validate(contact.lastName, ({ value }) =>
      // Min 2 letters, Max 50 letters
      !/^[A-Za-zÀ-ÿ]{2,50}$/i.test(value())
        ? {
            kind: 'alphabet-only',
            message: 'CONTACT.ERRORS.LASTNAME_LENGTH',
          }
        : undefined,
    );

    validate(contact.email, ({ value }) =>
      // regex that validates an email
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(value())
        ? {
            kind: 'invalid-email',
            message: 'CONTACT.ERRORS.INVALID_EMAIL',
          }
        : undefined,
    );
    pattern(contact.phoneNumber, /^(\+|00|0)[1-9][0-9 \-\(\)\.]{7,32}$/i, {
      message: 'CONTACT.ERRORS.INVALID_PHONE',
    });

    validate(contact.message, ({ value }) => {
      const messageValue = value();

      // 1. Vérifier la longueur
      if (messageValue.length < 5 || messageValue.length > 500) {
        return {
          kind: 'invalid-message-length',
          message: 'CONTACT.ERRORS.INVALID_MESSAGE_LENGTH',
        };
      }

      // 2. Vérifier les caractères autorisés
      const messageRegex = /^[A-Za-z0-9À-ÿ\s\-.,!?;:'"()\n\r]*$/;
      if (!messageRegex.test(messageValue)) {
        return {
          kind: 'invalid-message-format',
          message: 'CONTACT.ERRORS.INVALID_MESSAGE_FORMAT',
        };
      }

      // 3. Détecter les patterns suspects
      if (/<|>/.test(messageValue)) {
        return {
          kind: 'suspicious-content',
          message: 'CONTACT.ERRORS.INVALID_MESSAGE_FORMAT',
        };
      }

      if (/(.)\1{10,}/.test(messageValue)) {
        return {
          kind: 'spam-detected',
          message: 'CONTACT.ERRORS.SPAM_DETECTED',
        };
      }

      return undefined;
    });
  });

  sendContact(contactInfo: ContactFormModel): void {
    this.mailService.sendEmailWithContactInfo(contactInfo).subscribe({
      next: () => {
        this.contactFormModel.set({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          message: '',
        });

        this.contactForm().reset();
      },
      error: (err) => {
        console.error("Erreur lors de l'envoi : ", err);
      },
      complete: () => {
        this.openModal();
      },
    });
  }

  submitContactForm(event: Event): void {
    // Prevent the browser from reloading the page
    event.preventDefault();

    // If the form is not valid, do nothing
    if (!this.contactForm().valid()) {
      return;
    }

    const rawData = this.contactFormModel();
    this.sendContact(rawData);
  }

  openModal(): void {
    this.dialog.open(ContactModal);
  }
}
