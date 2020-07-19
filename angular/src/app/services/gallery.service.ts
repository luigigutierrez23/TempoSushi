import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GalleryService {

  public url : string;

  constructor(private http : HttpClient ) {
    
      this.url = "assets/js/json/gallery.json"
    
  }

  getGallery(){

      return this.http.get(this.url);

  }

}
