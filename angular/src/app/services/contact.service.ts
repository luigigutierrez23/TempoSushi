import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Importamos ruta global de la API
import { Ruta } from '../config';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  public url : string;

  constructor(private http : HttpClient) {

      this.url = Ruta.url;

   }

   /*---------------------------------------
  Hacer peticion POST en Angular
  --------------------------------------*/

  sendEmail(customer){

    const headers = new HttpHeaders();

    return this.http.post(`${this.url}/send-email`, customer, {headers});

  }

}
