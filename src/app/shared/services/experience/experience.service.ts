import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CvExperience } from '@core/models/interfaces/cv-experience.interface';
import { environment } from '@environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private apiUrl = environment.apiUrl;

  private http = inject(HttpClient);

  // get all exp
  getExperiences(): Observable<CvExperience[]> {
    return this.http.get<CvExperience[]>(`${this.apiUrl}/experiences`);
  }

  // get exp by id
  getExperienceById(id: number): Observable<CvExperience> {
    return this.http.get<CvExperience>(`${this.apiUrl}/experiences/${id}`);
  }
}
