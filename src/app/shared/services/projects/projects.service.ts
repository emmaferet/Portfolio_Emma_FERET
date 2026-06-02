import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Projects } from '@core/models/interfaces/projects.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private apiUrl = 'http://localhost:3000/projects';

  private http = inject(HttpClient);

  // Get all projects
  getMyProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>(this.apiUrl);
  }

  //Get by id
  getMyProjectsById(id: number): Observable<Projects> {
    return this.http.get<Projects>(`${this.apiUrl}/${id}`);
  }
}
