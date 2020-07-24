import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Ruta } from '../config';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public url : string;

  constructor(private http : HttpClient ) {
    
      this.url = Ruta.url;
    
  }

  /*---------------------------------------
  Hacer peticion POST en Angular
  --------------------------------------*/

  sendEmail(listaUsuario){

    const headers = new HttpHeaders();

    return this.http.post(`${this.url}/crear-usuario`, listaUsuario, {headers});

  }

}
