import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';

import { Ruta } from '../../../config';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  /*---------------   Variables publicas    ----------------*/
  public articlesJson:any;
  public url = Ruta.url;

  constructor(private articlesServices : ArticlesService ) { 
    
      /*---------------------------------------
      RECIBIENDO LOS DATOS DEL JSON
      --------------------------------------*/

      this.articlesServices.getArticles()
      .subscribe( result => {
          this.articlesJson = result["data"];
      })

  }

  ngOnInit() {
  }

}
