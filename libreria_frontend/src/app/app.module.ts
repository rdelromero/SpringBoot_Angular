import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Para las llamadas HTTP
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Para manejo de formularios

import { AppRoutingModule } from './app-routing.module'; // Routing module
import { AppComponent } from './app.component';
import { AutoresComponent } from './autores/autores.component';
import { AutorService } from './autor.service';
import { LeerAutorComponent } from './leer-autor/leer-autor.component';
import { CrearAutorComponent } from './crear-autor/crear-autor.component';
import { ActualizarAutorComponent } from './actualizar-autor/actualizar-autor.component';
import { AutoresPorNacionalidadComponent } from './autores-por-nacionalidad/autores-por-nacionalidad.component'; // El servicio de autores

@NgModule({
  declarations: [
    AppComponent,
    AutoresComponent,
    LeerAutorComponent,
    CrearAutorComponent,
    ActualizarAutorComponent,
    AutoresPorNacionalidadComponent  // Asegúrate de declarar el componente aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AutorService // Asegúrate de incluir el servicio aquí si no usaste providedIn: 'root'
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }