import { Component,  HostListener, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

      /*=============================================
      NAVEGACIÓN SCROLL
      =============================================*/

      $(".nav-link").click(function(e){

        e.preventDefault();

        var target = $(this).attr("href");
        
        $("html, body").animate({

           scrollTop: $(target).offset().top

        },1000, "easeOutBack")

      })

      /*=============================================
      STICKY JS
      =============================================*/

      if(window.matchMedia("(min-width:992px)").matches){

        $("#inicio").sticky({topSpacing:0, zIndex:1000});

      }

  }

 header_variable=false;

@HostListener ("document:scroll")
scrollfunction(){
  if(document.body.scrollTop>0 || document.documentElement.scrollTop>0){
    this.header_variable=true;
  }else{
    this.header_variable=false;
  }
}


}
