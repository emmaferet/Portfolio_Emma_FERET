import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Skills } from '@core/models/interfaces/skills.interface';
import { environment } from '@environments/environments';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private apiUrl = environment.apiUrl + '/skills';

  // constructor(private http: HttpClient) {}
  private http = inject(HttpClient);

  // Get all
  getSkills(): Observable<Skills[]> {
    return this.http.get<Skills[]>(this.apiUrl);
  }
  // Get one by id
  getSkillById(id: number): Observable<Skills> {
    return this.http.get<Skills>(`${this.apiUrl}/${id}`);
  }
}
