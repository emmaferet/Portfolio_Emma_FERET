import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Formations } from '@core/models/interfaces/cvFormation.interface';
import { environment } from '@environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  private apiUrl = environment.apiUrl + '/formations';

  private http = inject(HttpClient);

  // Get all
  getFormations(): Observable<Formations[]> {
    return this.http.get<Formations[]>(this.apiUrl);
  }
  // Get one by id
  getFormationById(id: number): Observable<Formations> {
    return this.http.get<Formations>(`${this.apiUrl}/${id}`);
  }
  // Update all
  updateFormations(skillsList: Formations[]): Observable<Formations[]> {
    return this.http.put<Formations[]>(`${this.apiUrl}`, skillsList);
  }
  // Update one by id
  updateFormationById(id: number, newSkill: Formations): Observable<Formations> {
    return this.http.put<Formations>(`${this.apiUrl}/${id}`, newSkill);
  }
}
