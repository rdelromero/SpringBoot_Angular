import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AutorService } from '../autor.service';
import { Autor } from '../autor.model';

@Component({
  selector: 'app-crear-autor',
  templateUrl: './crear-autor.component.html'
})
export class CrearAutorComponent {

  autor: Autor = new Autor();
  mensajeError: string | null = null;
  mensajeExito: string | null = null;

  constructor(private autorService: AutorService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.autorService.crearAutor(this.autor).subscribe({
        //Si tenemos respuesta del servidor con status 201
        next: (devolucionBack) => {
          this.mensajeExito = "Autor creado";
          //this.mensajeExito = JSON.stringify(devolucionBack);
          //No vale utilizar form.reset(), tiene que ser form.resetForm();
          form.resetForm();
          setTimeout(() => {
            this.mensajeExito = null;
          }, 4000);
        },
        //Podemos poner "devolucionBack" o cualquier otro nombre
        error: (devolucionBack) => {
          //Si tenemos respuesta del servidor con status 400.
          //Ponemos la palabra Mensaje porque es lo que pusimos en el @PostMapping("/autores") de Spring Boot
          if (JSON.stringify(devolucionBack.error.MensajeSpringBoot)) {
            this.mensajeError = "No ha sido posible realizar el registro. Ya existe un autor con esa dirección de correo electrónico."
            /*Otra opción es dar al cliente la misma respuesta que da el servidor
            this.mensajeError = JSON.stringify(devolucionBack.error.Mensaje);*/
          }
          //Si no tenemos respuesta del servidor
          else {
            this.mensajeError = "No ha sido posible conectar con el servidor."
          }
          setTimeout(() => {
            this.mensajeError = null;
          }, 4000);  // 5000 milisegundos = 5 segundos
        }
      });
    }
  }

}