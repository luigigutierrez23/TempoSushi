import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Importamos ruta global de la API
import { Ruta } from '../config';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  public url : string;

  constructor(private http : HttpClient ) {
    
      this.url = Ruta.url
    
  }

  getProducts(){

      return this.http.get(`${this.url}/mostrar-productos`);

  }

}
