import { Component, OnInit, Input} from '@angular/core';
import { ProductsService } from '../../../services/products.service';

import { Ruta } from '../../../config';

declare var jQuery:any;
declare var $:any; 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  /*---------------   Variables publicas    ----------------*/
  public productsJson:any;
  public renderProducts:boolean = true;
  public url = Ruta.url;

  @Input() filterBy?: string ='all';

  constructor(private productsService : ProductsService) {

      /*---------------------------------------
      RECIBIENDO DATOS DINAMICOS
      --------------------------------------*/
      productsService.getProducts()
      .subscribe( result =>{
        this.productsJson = result["data"];
      })

   }

  ngOnInit() {
    
  }

  callback(){

    if(this.renderProducts){

        this.renderProducts = false;

        /*=============================================
        PINTEREST GRID
        =============================================*/

        $('.pinterest_grid').pinterest_grid({
          no_columns: 4, //Número de columnas
          padding_x: 15, //Márgenes internas horizontal
          padding_y: 20, //Márgenes internas vertical
          margin_bottom: 50, //Márgen externa inferor
        
          single_column_breakpoint: 776 //Punto de quiebre para una sola columna
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
