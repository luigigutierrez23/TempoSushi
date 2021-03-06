import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

import { Ruta } from '../../../config';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  /*---------------   Variables publicas    ----------------*/
  public productsJson: any;
  public renderProducts: boolean = true;
  public url = Ruta.url;
  public title_ws: string;
  public convertir: any;

  @Input() filterBy?: string = 'all';

  constructor(private productsService: ProductsService) {
    /*---------------------------------------
      RECIBIENDO DATOS DINAMICOS
      --------------------------------------*/
    productsService.getProducts().subscribe((result) => {
      this.productsJson = result['data'];
      this.convertir = this.productsJson['title'];
      console.log(this.convertir);
    });
  }

  ngOnInit() {}

  callback() {
    if (this.renderProducts) {
      this.renderProducts = false;

      /*---------------------------------------
       CODIGO JS
       --------------------------------------*/
    }
  }
}
