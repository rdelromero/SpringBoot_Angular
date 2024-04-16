//El nombre de la clase debe ser el mismo que aparezca en el spring boot
export class Autor {
  idAutor: number = 0;
  nombre: string;
  fechaNacimiento: Date;
  nacionalidad: string;
  direccionEmail: string;
  imagen: string;
  descripcion: string;
  fechaCreacion?: string;
  fechaActualizacion?: string;

  constructor(
    nombre: string = '',
    fechaNacimiento: Date = new Date(), // Valor predeterminado para la fecha de nacimiento
    nacionalidad: string ='',
    direccionEmail: string = '',
    imagen: string = '',
    descripcion: string =''
  ) {
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.nacionalidad = nacionalidad;
    this.direccionEmail = direccionEmail;
    this.imagen = imagen;
    this.descripcion = descripcion;
  }
}