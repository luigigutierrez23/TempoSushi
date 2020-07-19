import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public url : string;

  constructor(private http : HttpClient ) {
    
      this.url = "assets/js/json/users.json"
    
  }

  getUsers(){

      return this.http.get(this.url);

  }

}
