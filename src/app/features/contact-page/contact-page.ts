import { Component, signal } from '@angular/core';
import { form, FormField, pattern, required, validate } from '@angular/forms/signals';

interface ContactFormModel {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

@Component({
  selector: 'app-contact-page',
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

      // Vérifier la longueur (5 à 500 caractères)
      if (messageValue.length < 5 || messageValue.length > 500) {
        return {
          kind: 'invalid-message-length',
          message: 'Le message doit contenir entre 5 et 500 caractères.',
        };
      }

      // Regex sécurisée : autorise lettres, chiffres, espaces et caractères de ponctuation courants
      // Prévient les attaques regex (ReDoS)
      const messageRegex = /^[A-Za-z0-9À-ÿ\s\-.,!?;:'"()\n\r]*$/;

      if (!messageRegex.test(messageValue)) {
        return {
          kind: 'invalid-message-format',
          message: 'Le message contient des caractères non autorisés.',
        };
      }
      // Option 3 : Détecter les patterns suspects (ex: répétitions, balises HTML)
      const hasSuspiciousPatterns = () => {
        // declare the value to avoid calling it several times, since it isn't in the callback
        const value = messageValue;
        // Pas de < > qui pourraient signaler du HTML
        if (/<|>/.test(value)) {
          return {
            kind: 'suspicious-content',
            message: 'Les caractères < et > ne sont pas autorisés.',
          };
        }
        // Pas de répétitions excessives (spam)
        if (/(.)\1{10,}/.test(value)) {
          return {
            kind: 'spam-detected',
            message: 'Trop de caractères répétés détectés.',
          };
        }
        return undefined;
      };
      return undefined;
    });
  });

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
  }
}
