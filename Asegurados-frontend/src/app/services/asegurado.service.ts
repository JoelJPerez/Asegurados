import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asegurado } from '../models/asegurado';

@Injectable({
  providedIn: 'root'
})
export class AseguradoService {
  private apiUrl = 'http://localhost:5243/api/asegurados';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Asegurado[]> {
    return this.http.get<Asegurado[]>(this.apiUrl);
  }

  getAseguradoById(id: number): Observable<Asegurado> {
    return this.http.get<Asegurado>(`${this.apiUrl}/${id}`);
  }

  createAsegurado(asegurado: Asegurado): Observable<Asegurado> {
    return this.http.post<Asegurado>(this.apiUrl, asegurado);
  }

  updateAsegurado(id: number, asegurado: Asegurado): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, asegurado);
  }

  deleteAsegurado(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
