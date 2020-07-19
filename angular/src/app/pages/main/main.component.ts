import { Component, OnInit } from '@angular/core';

//Clase que se necesita para navegar entre paginas
import { ActivatedRoute } from '@angular/router';

declare var jQuery:any;
declare var $:any; 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    /*=============================================
      SCROLL UP
      =============================================*/

      $.scrollUp({
        scrollText: "",
        scrollSpeed:2000,
        easingType: "easeOutQuint"
      })

      $("#scrollUp").css({
          bottom: "20px",
          right: "20px",
          width: "50px",
          height: "50px",
          background: "url(../assets/img/flecha.jpg)"
      })


  }

}
