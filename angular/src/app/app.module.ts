//Importamos la clase BrowserModule, para buscar modulos de angular
import { BrowserModule } from '@angular/platform-browser';

//Permite el redireccionamiento entre paginas y el uso de ngIf
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Importamos la clase para trabajar con los formularios
import { FormsModule } from '@angular/forms';

//Importamos la clase NgModule que es el modulo raiz
import { NgModule } from '@angular/core';

//Importamos los modulos de ruta
import { AppRoutingModule } from './app-routing.module';

//Importamos httclientemodule para hacer peticiones http
import { HttpClientModule } from '@angular/common/http';

//AppComponent es el componente principal de Angular
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './pages/main/header/header.component';
import { SlideComponent } from './pages/main/slide/slide.component';
import { ProductsComponent } from './pages/main/products/products.component';
import { AboutComponent } from './pages/main/about/about.component';
import { GalleryComponent } from './pages/main/gallery/gallery.component';
import { ContactComponent } from './pages/main/contact/contact.component';

import {  FilterPipe } from './pages/main/products/pipes/filter.pipe';

//Los decoradores son funciones que modifican clases de Javascript

@NgModule({

  //Las declaraciones son las clases de vista que pertenecen a este modulo.
  
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideComponent,
    ProductsComponent,
    AboutComponent,
    GalleryComponent, 
    ContactComponent,
    FilterPipe,
    MainComponent
   
  ],

  //Importamos otros modulos cuyas clases exportadas sean necesarias para las plantillas de componentes declaradas en este modulo.
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule
  ],

  //Los proveedores son los creadores de servicios que este modulo contribuye a la recoleccion global de servicios; se vuelven accesibles en todas las partes de la aplicacion. Esto lo habilitamos cuando invocamos servicios de una base de datos.
  providers: [
    FilterPipe
  ],

  //
  bootstrap: [AppComponent]
})

//Exportamos la clase del modulo raiz para poder ser invocada en otros archivos
export class AppModule { }
