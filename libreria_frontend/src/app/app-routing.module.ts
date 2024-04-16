import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoresComponent } from './autores/autores.component';
import { AutoresPorNacionalidadComponent } from './autores-por-nacionalidad/autores-por-nacionalidad.component';
import { LeerAutorComponent } from './leer-autor/leer-autor.component';
import { CrearAutorComponent } from './crear-autor/crear-autor.component';
import { ActualizarAutorComponent } from './actualizar-autor/actualizar-autor.component';

const routes: Routes = [
  { path: 'autores', component: AutoresComponent },
  { path: 'autores/nacionalidad/:nacionalidadRoutingModule', component: AutoresPorNacionalidadComponent },
  { path: 'autor/:idAutorRoutingModule', component: LeerAutorComponent },
  { path: 'autores/crear', component: CrearAutorComponent },
  { path: 'autores/actualizar/:idAutorRoutingModule', component: ActualizarAutorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }