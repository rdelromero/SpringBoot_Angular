import { Component, OnInit } from '@angular/core';
import { AutorService } from '../autor.service';
import { ActivatedRoute } from '@angular/router';
import { Autor } from '../autor.model';

@Component({
  selector: 'app-autores-por-nacionalidad',
  templateUrl: './autores-por-nacionalidad.component.html',
  styleUrls: ['./autores-por-nacionalidad.component.css']
})
export class AutoresPorNacionalidadComponent implements OnInit {
  autores: Autor[] = [];
  nacionalidad: string = '';

  constructor(
    private autorService: AutorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nacionalidad = params['nacionalidadRoutingModule'];
      this.buscarAutores();
    });
  }

  buscarAutores(): void {
    this.autorService.obtenerAutoresPorNacionalidad(this.nacionalidad).subscribe({
      next: (data) => {
        this.autores = data;
      },
      error: (e) => {
        console.error(e);
        alert('No se pudieron cargar los autores. Por favor, intente de nuevo más tarde.');
      }
    });
  }
}