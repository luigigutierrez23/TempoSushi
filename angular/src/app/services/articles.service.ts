import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ArticlesService {

  public url : string;

  constructor(private http : HttpClient) { 

    this.url = "assets/js/json/articles.json";

  }

  getArticles(){

      return this.http.get(this.url);

  }

}
