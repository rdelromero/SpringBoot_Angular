import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor } from './autor.model';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  private apiUrl = 'http://localhost:8089/api/autores';

  constructor(private http: HttpClient) { }

  obtenerTodosAutoresBack(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.apiUrl);
  }

  obtenerAutoresPorNacionalidad(nacionalidad: string): Observable<Autor[]> {
    return this.http.get<Autor[]>(`${this.apiUrl}/nacionalidad/${nacionalidad}`);
  }

  obtenerAutorPorIdBack(idAutor: number): Observable<Autor> {
    return this.http.get<Autor>(`${this.apiUrl}/${idAutor}`);
  }

  crearAutor(autor: Autor): Observable<Autor> {
    return this.http.post<Autor>(this.apiUrl, autor);
  }

  borrarAutorPorIdBack(idAutor: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${idAutor}`);
  }

  actualizarAutor(idAutor: number, autor: Autor): Observable<Autor> {
    return this.http.put<Autor>(`${this.apiUrl}/${idAutor}`, autor);
  }
}