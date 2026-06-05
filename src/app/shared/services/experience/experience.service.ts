import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CvExperience } from '@core/models/interfaces/cvExperience.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private apiUrl = 'http://localhost:3000/experience';

  private http = inject(HttpClient);

  // get all exp
  getExperiences(): Observable<CvExperience[]> {
    return this.http.get<CvExperience[]>(this.apiUrl);
  }

  // get exp by id
  getExperienceById(id: number): Observable<CvExperience> {
    return this.http.get<CvExperience>(`$this.apiUrl / ${id}`);
  }
}
