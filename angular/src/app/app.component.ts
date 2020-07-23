//Importamos la clase Component para recopilar metadatos de configuracion de componentes
import { Component, OnInit } from '@angular/core';

//Decorador de la clase Componente
@Component({
  //El selector es la etiqueta personalizada que nos permite crear Angular en el HTML y donde se nos va a visualizar este componente.
  selector: 'app-root',

  //La plantilla url es la ruta de la vista HTML que va a imprimir este componente
  templateUrl: './app.component.html',

  //La ruta del estilo es donde direccionamos la hoja de estilo exclusiva de este componente
  styleUrls: ['./app.component.css']
})

//Exportamos la clase con el nombre que nosotros declaramos en el APP MODULE
export class AppComponent implements OnInit{

    ngOnInit(){

    }
  }
