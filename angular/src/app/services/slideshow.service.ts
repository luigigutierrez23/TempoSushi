//Importamos el decorador Injectable, para inyectar clases de dependencia en los componentes
import { Injectable } from '@angular/core';
//Este modulo es para conectarnos a cualquier API con peticiones http
import { HttpClient } from '@angular/common/http';

//Importamos ruta global de la API
import { Ruta } from '../config';

//Definimos el decorador injectable
@Injectable({
  providedIn: 'root'
})
export class SlideshowService {

  public url: string;

  constructor(private http: HttpClient) { 
    
    this.url = Ruta.url;

  }

  getSlide(){
    
    return this.http.get(`${this.url}/mostrar-slide`);

  }

}
