// actualizar-autor.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutorService } from '../autor.service';
import { Autor } from '../autor.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-actualizar-autor',
  templateUrl: './actualizar-autor.component.html'
})
export class ActualizarAutorComponent implements OnInit {
  autor: Autor = new Autor();
  mensajeError: string | null = null;
  mensajeExito: string | null = null;
  constructor(
    private autorService: AutorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['idAutorRoutingModule'];
      this.autorService.obtenerAutorPorIdBack(id).subscribe({
        next: (autor) => this.autor = autor,
        error: (err) => console.error('Error al cargar el autor:', err)
      });
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
    
      this.autorService.actualizarAutor(this.autor.idAutor, this.autor).subscribe({
        next: (devolucionBack) => {
          //En realidad si no ha cambiado ningún dato del autor los datos no se actualizan, es decir no cambia updated_at
          this.mensajeExito = "Autor actualizado";
          //this.mensajeExito = JSON.stringify(devolucionBack);
          //No vale utilizar form.reset(), tiene que ser form.resetForm();
          //form.resetForm();
          setTimeout(() => {
            this.mensajeExito = null;
          }, 4000);
        },
        //Podemos poner "devolucionBack" o cualquier otro nombre
        error: (devolucionBack) => {
          //Si tenemos respuesta del servidor con status 400.
          //Ponemos la palabra Mensaje porque es lo que pusimos en el @PostMapping("/autors") de Spring Boot
          if (JSON.stringify(devolucionBack.error.MensajeSpringBoot)) {
            this.mensajeError = "No ha sido posible realizar la actualizacion. Ya existe un autor con esa dirección de correo electrónico."
            /*Otra opción es dar al cliente la misma respuesta que da el servidor
            this.mensajeError = JSON.stringify(devolucionBack.error.Mensaje);*/
          }
          //Si no tenemos respuesta del servidor
          else {
            this.mensajeError = "No ha sido posible conectar con el servidor."
          }
          setTimeout(() => {
            this.mensajeError = null;
          }, 4000);  // 4000 milisegundos = 4 segundos
        }
      });
    }
  }
}