import { Component, OnInit } from '@angular/core';

import { ContactService } from '../../../services/contact.service';
import Swal from 'sweetalert2';

import { NgForm } from '@angular/forms';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public customer:any;
  public usuarioCreado:any;
  public creado:boolean = false;
  public errorCreado:boolean = false;
  public mensajeApi:string;

  constructor(private contactService : ContactService) { 

    this.customer = {

      name:null,
      email:null,
      message:null

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

  sendEmail(f: NgForm){

    this.contactService.sendEmail(this.customer)
    .subscribe( result => {

       if(result["status"] ==200){

          Swal.fire('Excelente...', '¡Mensaje enviado correctamente!', 'success');
       }else{
          Swal.fire('Oops...', '¡Algo salió mal!', 'error');
       }

    });

  }

}
