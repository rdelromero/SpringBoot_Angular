import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutorService } from '../autor.service';
import { Autor } from '../autor.model';

@Component({
  selector: 'app-leer-autor',
  templateUrl: './leer-autor.component.html',
  styleUrls: ['./leer-autor.component.css']
})
export class LeerAutorComponent implements OnInit {
  autor: Autor | undefined;

  constructor(
    private route: ActivatedRoute,
    private autorService: AutorService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['idAutorRoutingModule'];
      if (id) {
        this.autorService.obtenerAutorPorIdBack(id).subscribe({
          next: (autor) => {
            this.autor = autor;
          },
          error: (err) => {
            console.error('Error fetching autor', err);
          }
        });
      }
    });
  }
}