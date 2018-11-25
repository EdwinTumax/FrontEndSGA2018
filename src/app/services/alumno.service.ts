import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  APIURL = environment.apiEndPoint;
  token = environment.token;
  constructor(private _httpClient: HttpClient) { }

  getQuery(query: string) {
    const url = `${this.APIURL}${query}`;
    const headers = new HttpHeaders( {'Authorization' : `Bearer ${this.token}`});
    return this._httpClient.get(url, {headers});
  }
  getAlumnos() {
    return this.getQuery('alumnos');
  }
}
