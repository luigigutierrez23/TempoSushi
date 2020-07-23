import { Component, OnInit, Input } from '@angular/core';
import { GalleryService } from '../../../services/gallery.service';

import { Ruta } from '../../../config';

declare var jQuery:any;
declare var $:any; 

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  /*---------------   Variables publicas    ----------------*/
  public galleryJson:any;
  public renderGallery:boolean = true;
  public url = Ruta.url;
  @Input() filterBy?: string ='';

  constructor(private galleryService : GalleryService) {

      /*---------------------------------------
      RECIBIENDO DATOS DINAMICOS
      --------------------------------------*/
      galleryService.getGallery()
      .subscribe( result =>{

        this.galleryJson = result["data"];
        
      })

   }

  ngOnInit() {

  }

  callback(){

      if(this.renderGallery){

          this.renderGallery = false;
 
          /*=============================================
          PINTEREST GRID
          =============================================*/

          $('.pinterest_grid').pinterest_grid({
            no_columns: 4, //Número de columnas
            padding_x: 10, //Márgenes internas horizontal
            padding_y: 10, //Márgenes internas vertical
            margin_bottom: 50, //Márgen externa inferor
            single_column_breakpoint: 769 //Punto de quiebre para una sola columna
          });

          /*=============================================
          EKKO LIGHTBOX
          =============================================*/

          $(document).on("click", "[data-toggle='lightbox']", function(e){

            e.preventDefault(); //Quitar eventos que vengan por defecto en el navegador
            $(this).ekkoLightbox(); //Activar la acción del plugin Ekko Lightbox

          })

      }

  }

}
