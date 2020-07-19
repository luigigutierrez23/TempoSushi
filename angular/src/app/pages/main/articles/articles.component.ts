import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  /*---------------   Variables publicas    ----------------*/
  public articlesJson:any;

  constructor(private articlesServices : ArticlesService ) { 
    
      /*---------------------------------------
      RECIBIENDO LOS DATOS DEL JSON
      --------------------------------------*/

      this.articlesServices.getArticles()
      .subscribe( result => {
          this.articlesJson = result;
      })

  }

  ngOnInit() {
  }

}
