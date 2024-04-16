import { Component, OnInit } from '@angular/core';
import { AutorService } from '../autor.service';
import { Autor } from '../autor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {
  autores: Autor[] = [];
  public ngmodelNacionalidad: string = '';

  constructor(private autorService: AutorService, private router: Router) { }

  ngOnInit(): void {
    this.cargarAutores();
  }

  cargarAutores(): void {
    this.autorService.obtenerTodosAutoresBack().subscribe({
      next: (data) => {
        this.autores = data;
      },
      error: (error) => {
        console.error('Error al obtener autores:', error);
      }
    });
  }

  borrarAutorPorId(idAutor: number) {
    this.autorService.borrarAutorPorIdBack(idAutor).subscribe({
      next: () => {
        console.log('Mensaje desde Angular: Autor borrado correctamente.');
        this.cargarAutores(); // Recarga la lista de autores después de borrar
      },
      error: (error) => console.error('Error al eliminar autor', error)
    });
  }

  navegarPorNacionalidad(): void {
    this.router.navigate(['/autores/nacionalidad', this.ngmodelNacionalidad.toLowerCase().replace(/\s+/g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")]);
  }

}