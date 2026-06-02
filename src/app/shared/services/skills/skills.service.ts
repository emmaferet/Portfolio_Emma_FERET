import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Skills } from '@core/models/interfaces/skills.interface';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private apiUrl = 'http://localhost:3000/skills';

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
  // Update all
  updateSkills(skillsList: Skills[]): Observable<Skills[]> {
    return this.http.put<Skills[]>(`${this.apiUrl}`, skillsList);
  }
  // Update one by id
  updateSkillById(id: number, newSkill: Skills): Observable<Skills> {
    return this.http.put<Skills>(`${this.apiUrl}/${id}`, newSkill);
  }
}
