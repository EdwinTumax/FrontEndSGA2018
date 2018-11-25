import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from './../../environments/environment';
import {map} from 'rxjs/operators';
import { Carrera } from './../components/interfaces/carrera.interface';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {
   APIURL = environment.apiEndPoint;
   TOKEN = environment.token;
  constructor(private _httpClient: HttpClient) {}
  getQuery(query: string) {
    const url = `${this.APIURL}${ query }`;
    const headers = new HttpHeaders( {'Authorization' : `Bearer ${this.TOKEN}`} );
    return this._httpClient.get(url, { headers });
  }
  getCarreras() {
     return this.getQuery('Carreras');
     // return this.getQuery('carreras').pipe( map( data => data['carreras']));
  }

  addCarrera(carrera: Carrera) {
    const body = JSON.stringify(carrera);
    const url = `${this.APIURL}Carreras`;
    // const httpOptions =  { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    // const headers = new HttpHeaders( {'Authorization' : `Bearer ${this.TOKEN}`} );
    return this._httpClient.post(url, body, {headers: this.getHeaders()});
  }

  getHeaders() {
   const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${this.TOKEN}`);
    return headers;
  }
}
