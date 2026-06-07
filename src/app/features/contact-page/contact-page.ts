import { Component, inject, signal } from '@angular/core';
import { form, FormField, pattern, required, validate } from '@angular/forms/signals';
import { MatDialog } from '@angular/material/dialog';
import emailjs from '@emailjs/browser';
import { ContactModal } from '@shared/components/contact-modal/contact-modal';
import { environment } from './../../../environments/environments.development';

interface ContactFormModel {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FormField],
  templateUrl: './contact-page.html',
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

  //// 1st try with a constructor, it didn't work and didn't inject the properties properly
  // MatDialog(angular class) properties injection
  public dialog = inject(MatDialog);

  contactForm = form(this.contactFormModel, (contact) => {
    required(contact.firstName, { message: 'Prénom requis' });
    required(contact.lastName, { message: 'Nom requis' });
    required(contact.email, { message: 'Mail requis' });
    required(contact.message, { message: 'Message requis' });

    validate(contact.firstName, ({ value }) =>
      // ternary expression
      !/^[A-Za-zÀ-ÿ]{2,50}$/i.test(value())
        ? {
            kind: 'alphabet-only',
            message: 'Ce champ doit posséder entre 2 et 50 caractères',
          }
        : undefined,
    );
    validate(contact.lastName, ({ value }) =>
      // Min 2 letters, Max 50 letters
      !/^[A-Za-zÀ-ÿ]{2,50}$/i.test(value())
        ? {
            kind: 'alphabet-only',
            message: 'Ce champ doit posséder entre 2 et 50 caractères',
          }
        : undefined,
    );

    validate(contact.email, ({ value }) =>
      // regex that validates an email
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(value())
        ? {
            kind: 'invalid-email',
            message: 'Veuillez saisir une adresse email valide.',
          }
        : undefined,
    );
    pattern(contact.phoneNumber, /^(\+|00|0)[1-9][0-9 \-\(\)\.]{7,32}$/i, {
      message: 'Le numéro de téléphone doit être un numéro français valide.',
    });

    // pattern(schema.phone, /^(?:(?:+|00)33|0)\s[1-9](?:[\s.-]\d{2}){4}$/, {
    //   message: 'Le numéro de téléphone doit être un numéro français valide.'
    // });
    validate(contact.message, ({ value }) => {
      const messageValue = value();

      // 1. Vérifier la longueur
      if (messageValue.length < 5 || messageValue.length > 500) {
        return {
          kind: 'invalid-message-length',
          message: 'Le message doit contenir entre 5 et 500 caractères.',
        };
      }

      // 2. Vérifier les caractères autorisés
      const messageRegex = /^[A-Za-z0-9À-ÿ\s\-.,!?;:'"()\n\r]*$/;
      if (!messageRegex.test(messageValue)) {
        return {
          kind: 'invalid-message-format',
          message: 'Le message contient des caractères non autorisés.',
        };
      }

      // 3. Détecter les patterns suspects
      if (/<|>/.test(messageValue)) {
        return {
          kind: 'suspicious-content',
          message: 'Les caractères < et > ne sont pas autorisés.',
        };
      }

      if (/(.)\1{10,}/.test(messageValue)) {
        return {
          kind: 'spam-detected',
          message: 'Trop de caractères répétés détectés.',
        };
      }

      return undefined;
    });
  });

  sendContact(contactInfo: ContactFormModel) {
    const templateParams = {
      firstName: contactInfo.firstName,
      lastName: contactInfo.lastName,
      email: contactInfo.email,
      phoneNumber: contactInfo.phoneNumber ?? 'Pas de numéro',
      message: contactInfo.message,
    };
    emailjs
      .send(environment.serviceId, environment.templateId, templateParams, environment.publicKey)
      // .then = qu'est ce qu'on fait ensuite
      // ici on set les valeurs à vide
      .then(() => {
        this.contactFormModel.set({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          message: '',
        });
        // use of the .reset() of signals to reset the status of the form to untouched, after sending the
        // raw data and setting them to ''
        this.contactForm().reset();
      });
  }

  submitContactForm(event: Event) {
    // Prevent the browser from reloading the page
    event.preventDefault();

    // Log the general state of the form
    console.log('Formulaire valide ?', this.contactForm().valid());
    console.log('Formulaire modifié (dirty) ?', this.contactForm().dirty());
    console.log('Formulaire visité (touched) ?', this.contactForm().touched());

    if (!this.contactForm().valid()) {
      console.log('Soumission bloquée : Le formulaire contient des erreurs.');
      return;
    }

    const rawData = this.contactFormModel();
    console.log("Formulaire validé. Données prêtes à l'envoi :", rawData);
    this.sendContact(rawData);
  }

  // Method to open the dialog, (click) in the html
  openModal(): void {
    this.dialog.open(ContactModal);
  }
}
