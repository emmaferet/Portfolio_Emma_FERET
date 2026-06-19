import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { ContactFormModel } from '@core/models/interfaces/contact-form-model.interface';
import { MailResponse } from '@core/models/interfaces/mail-reponse.interface';
import { environment } from '@environments/environments';
import { Observable } from 'rxjs';

@Service()
export class MailService {
  private apiUrlMail = environment.apiUrl + '/mail';

  private http = inject(HttpClient);

  sendEmailWithContactInfo(contactInfo: ContactFormModel): Observable<MailResponse> {
    return this.http.post<MailResponse>(`${this.apiUrlMail}/send`, contactInfo);
  }
}
