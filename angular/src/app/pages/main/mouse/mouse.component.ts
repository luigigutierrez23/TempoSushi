import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any; 

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent implements OnInit {

  constructor() { }

  ngOnInit() {

      /*=============================================
      MOUSE PARALLAX EFFECT - JQUERY
      =============================================*/

      var mouseParallax = $(".mouseParallax");

      $(".mouseParallax").mousemove(function(e){

        var posX = e.offsetX;
        var posY = e.offsetY;

        for (var i = 0; i < mouseParallax.length; i++) {
          
          $(mouseParallax[i]).css({

            "width":"110%",
            "left":-posX / (i *250) + "%",
            "top":posY / (i *250) + "%"


          })
        }

        $(mouseParallax[0]).css({"width":"100%"})


      })

  }

}
