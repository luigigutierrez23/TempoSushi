import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { UsersService } from '../../../services/users.service';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public listaUsuario:any;
  public usuarioCreado:any;
  public creado:boolean = true;

  constructor(private usersService: UsersService) { 

    this.listaUsuario = {

      usuario:null,
      password:null,
      email:null

    }

  }

  ngOnInit() {

      /*=============================================
      VALIDAR FORMULARIO
      =============================================*/

      (function() {
        'use strict';
        window.addEventListener('load', function() {
          // Get the forms we want to add validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      })();

      /*=============================================
      ICHECK
      =============================================*/

      $(".icheck").iCheck({

        checkboxClass: "icheckbox_flat-blue",
        radioClass: "iradio_flat-blue"
      })
    
  }

  /*=============================================
  Recibir formulario login
  =============================================*/

  guardarUsuario(f: NgForm){

    this.usersService.guardarUsuario(this.listaUsuario)
    .subscribe( result =>{

        this.usuarioCreado = result;

        if(this.usuarioCreado["status"] == 200){

          $(".flagUser").removeClass("d-none");
          $(".flagUser").addClass("d-block");
          $(".flagUser").html(this.usuarioCreado["mensaje"]);

        }else{

            this.usuarioCreado = false;
            $(".flagUserError").html(this.usuarioCreado["mensaje"]);
        }
      
    })

  }

}
