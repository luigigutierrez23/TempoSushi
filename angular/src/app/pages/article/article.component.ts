import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';

//Clase para navegar entre paginas
import { ActivatedRoute } from '@angular/router';

//Clase que se necesita para trabajar con formularios
import { NgForm } from '@angular/forms';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  /*---------------   Variables Publicas    ----------------*/
  public articlesJson:any;
  public renderArticle:any;
  public contenidoArticle:any;
  public login:boolean = false;
  public user:string;
  public password:string;
  public usersJson:any;
  public renderUser:any;
  public validarLogin:boolean = true;

  constructor(activatedRoute : ActivatedRoute , 
              private articulosService: ArticlesService,
              private usersService:UsersService) 
  {

      this.articulosService.getArticles()
      .subscribe( result => {

          this.articlesJson = result;

          this.renderArticle = this.articlesJson.find( res => {

              return res.url == activatedRoute.snapshot.params["id"];

          });

          this.contenidoArticle = this.renderArticle.contenido;

      })

   }

  ngOnInit() {
  }

  onSubmit(f: NgForm){

    this.usersService.getUsers()
    .subscribe( result =>{

      this.usersJson = result;

      this.renderUser = this.usersJson.find( res => {

          if(res.usuario == this.user && res.password == this.password){
            return true;
          }else{
            return false;
          }

      });

      if(this.renderUser){

          this.login = true;

      }else{

          this.validarLogin = false;

      }

    })
  }

}
