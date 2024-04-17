import { Component, OnInit } from '@angular/core';
import { AutorService } from '../autor.service';
import { Autor } from '../autor.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {
  autores: any = { content: [] }; 
  paginaActual = 1;
  numeroAutoresPorPagina = 10;
  numeroPaginas: number = 0;

  public ngmodelNacionalidad: string = '';

  constructor(private autorService: AutorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.autorService.obtenerTodosAutoresBack().subscribe(data => {
      //Obtener el número de páginas, data.length representa el número de autores
      this.numeroPaginas = Math.ceil(data.length / this.numeroAutoresPorPagina);
    });
    // Suscribirse a los parámetros de consulta para manejar cambios en la paginación
    this.route.queryParams.subscribe(params => {
      //page es el número de página
      const pagina = parseInt(params['p']) || this.paginaActual;  // Asegura que 'page' sea un número
      this.cargarAutores(pagina);
    });
  }

  cargarAutores(page: number): void {
    this.paginaActual = page;  // Actualiza la página actual
    this.autorService.obtenerTodosAutoresBackConPaginacion(page, this.numeroAutoresPorPagina).subscribe(data => {
      this.autores = data;
    }, error => {
      console.error('Error al cargar autores:', error);
    });
  }

  nextPage(): void {
    this.updatePage(this.paginaActual + 1);
  }

  previousPage(): void {
    if (this.paginaActual > 1) {
      this.updatePage(this.paginaActual - 1);
    }
  }

  private updatePage(page: number): void {
    this.router.navigate(['/autores'], { queryParams: { p: page } });
  }

  borrarAutorPorId(idAutor: number) {
    this.autorService.borrarAutorPorIdBack(idAutor).subscribe({
      next: () => {
        this.route.queryParams.subscribe(params => {
          const page = parseInt(params['p']) || this.paginaActual;  // Asegura que 'page' sea un número
          this.cargarAutores(page);
        });
      },
      error: (error) => console.error('Error al eliminar autor', error)
    });
  }

  navegarPorNacionalidad(): void {
    this.router.navigate(['/autores/nacionalidad', this.ngmodelNacionalidad.toLowerCase().replace(/\s+/g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")]);
  }

}