package com.libreria.modelo.entities;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.NamedQuery;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "autores")
@NamedQuery(name="Autor.findAll", query="SELECT a FROM Autor a")
public class Autor implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_autor")
	private int idAutor;
	
	@Column(name = "nombre")
	private String nombre;

	@Column(name = "fecha_nacimiento")
	@Temporal(TemporalType.DATE)
	private Date fechaNacimiento;
	
	@Column
	private String nacionalidad;
	
	@Column(name = "direccion_email")
	private String direccionEmail;
	
	@Column(name = "imagen")
	private String imagen;
	
	@Column(columnDefinition = "TEXT")
	private String descripcion;
	
	@Column(name = "created_at", nullable = false, updatable = false, insertable = false)
    private LocalDateTime fechaCreacion;
	
	@Column(name = "updated_at", nullable = false, updatable = false, insertable = false)
    private LocalDateTime fechaActualizacion;
	
	public Autor() {
	}
	
	public Autor(String nombre, String direccionEmail, String descripcion) {
		super();
		this.nombre = nombre;
		this.direccionEmail = direccionEmail;
		this.descripcion = descripcion;
	}
	public int getIdAutor() {
		return idAutor;
	}
	public void setIdAutor(int idAutor) {
		this.idAutor = idAutor;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getNacionalidad() {
		return nacionalidad;
	}
	public void setNacionalidad(String nacionalidad) {
		this.nacionalidad = nacionalidad;
	}
	public Date getFechaNacimiento() {
		return fechaNacimiento;
	}
	public void setFechaNacimiento(Date fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}
	public String getDireccionEmail() {
		return direccionEmail;
	}
	public void setDireccionEmail(String direccionEmail) {
		this.direccionEmail = direccionEmail;
	}
	public String getImagen() {
		return imagen;
	}
	public void setImagen(String imagen) {
		this.imagen = imagen;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public LocalDateTime getFechaCreacion() {
        return fechaCreacion;
    }
    public void setFechaCreacion(LocalDateTime fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }
	public LocalDateTime getFechaActualizacion() {
        return fechaActualizacion;
    }
    public void setFechaActualizacion(LocalDateTime fechaActualizacion) {
        this.fechaActualizacion = fechaActualizacion;
    }
}
