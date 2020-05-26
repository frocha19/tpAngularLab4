import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Instrumento } from '../models/instrumento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstrumentosService {
  url = 'http://localhost:9000/api/v1/instrumentos/';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Instrumento[]> {
    return this.http.get<Instrumento[]>(this.url);
  }

  getOne(id: number): Observable<Instrumento> {
    return this.http.get<Instrumento>(this.url + id);
  }

  post(instrumento: Instrumento): Observable<Instrumento> {
    return this.http.post<Instrumento>(this.url, instrumento);
  }

  put(instrumento: Instrumento): Observable<Instrumento> {
    return this.http.put<Instrumento>(this.url + instrumento.id, instrumento);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(this.url + id);
  }
  subirImg(file: any): Observable<any> {
    return this.http.post('http://localhost:9000/api/v1/instrumentos/uploadImg', file);
  }
}
