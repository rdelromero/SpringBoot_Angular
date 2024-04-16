package com.libreria.restcontroller;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.libreria.modelo.entities.Autor;
import com.libreria.repository.AutorRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class AutorController {

	@Autowired
	private AutorRepository autorRepositorio;
	
	// 2 LEER (READ) TODOS
	@GetMapping("/autores")
	public List<Autor> encontrarTodos(){
		return autorRepositorio.findAll();
	}		
	
	// 2 LEER (READ) POR NACIONALIDAD
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/autores/nacionalidad/{nacionalidad}")
    public ResponseEntity<?> encontrarAutoresPorNacionalidad(@PathVariable String nacionalidad) {
		String nacionalidadAjustada = nacionalidad.replace("-", " ");
        List<Autor> autores = autorRepositorio.findByNacionalidad(nacionalidadAjustada);
        if (autores.isEmpty()) {
            // Devuelve una respuesta con estado 404 Not Found y un mensaje informativo
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No se encontraron autores de la nacionalidad: " + nacionalidad+".");
        }
        // Devuelve la lista de autores con estado 200 OK
        return ResponseEntity.ok(autores);
    }
	
	// 2 LEER (READ) UNO
    @GetMapping("/autores/{idAutor}")
    public ResponseEntity<?> encontrarPorId(@PathVariable int idAutor) {
        Optional<Autor> autor = autorRepositorio.findById(idAutor);
        if (autor.isPresent()) {
            return ResponseEntity.ok(autor.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No existe autor de id: "+idAutor+".");
        }
    }
	
	// 1 CREAR (CREATE) UNO
	@PostMapping("/autores")
    public ResponseEntity<?> crearYGuardarAutor(@RequestBody Autor autor) {
        /* Expresión regular que verifica si el correo contiene exactamente un '@' no siendo este el primer carácter y
         * si tiene al menos un '.' después del '@' no siendo el '.' el último carácter.
         */
        String regexEmail = "^[^@]+@[^@]+\\.[^@]+$";
        
        // Verifica si el correo cumple con la expresión regular
        if (!Pattern.matches(regexEmail, autor.getDireccionEmail())) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("MensajeSpringBoot", "El correo electrónico debe contener exactamente un '@' no siendo este el primer carácter"
                    		+ "y después del @ debe haber un '.' no siendo '.' ni el primer carácter después del '@' ni el último carácter"));
        }

        // Verifica si ya existe un autor con el mismo correo electrónico
        Optional<Autor> existente = autorRepositorio.findByDireccionEmail(autor.getDireccionEmail());
        if (existente.isPresent()) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("MensajeSpringBoot", "Ya existe un autor con el correo electrónico proporcionado."));
        }

        // Guarda el nuevo autor en la base de datos
        Autor nuevoAutor = autorRepositorio.save(autor);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevoAutor);
    }
	
	// 3 ACTUALIZAR (UPDATE) AUTOR
	
	@PutMapping("/autores/{idAutor}")
    public ResponseEntity<?> actualizarAutor(@PathVariable int idAutor, @RequestBody Autor autorDetalles) {
        Autor autor = autorRepositorio.findById(idAutor).orElse(null);
        if (autor == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Autor no encontrado con ID: " + idAutor);
        }

        // Comprobar si el correo electrónico ya está en uso por otro autor
        Optional<Autor> autorConEmail = autorRepositorio.findByDireccionEmail(autorDetalles.getDireccionEmail());
        if (autorConEmail.isPresent() && autorConEmail.get().getIdAutor() != idAutor) {
        	 return ResponseEntity
                     .status(HttpStatus.BAD_REQUEST)
                     .body(Map.of("MensajeSpringBoot", "Ya existe un autor con el correo electrónico proporcionado."));
        }

        // Actualizar detalles del autor
        autor.setNombre(autorDetalles.getNombre());
        autor.setFechaNacimiento(autorDetalles.getFechaNacimiento());
        autor.setNacionalidad(autorDetalles.getNacionalidad());
        autor.setDireccionEmail(autorDetalles.getDireccionEmail());
        autor.setImagen(autorDetalles.getImagen());
        autor.setDescripcion(autorDetalles.getDescripcion());

        // Guarda el autor actualizado
        Autor autorActualizado = autorRepositorio.save(autor);
        return ResponseEntity.ok(autorActualizado);
    }

	// 4 BORRAR (DELETE) AUTOR. Devuelve un json
	@DeleteMapping("/autores/{idAutor}")
	public ResponseEntity<?> borrar(@PathVariable int idAutor) {
	    if (!autorRepositorio.existsById(idAutor)) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("mensaje", "No se ha podido borrar. No existe autor con ese id."));
	    } else {
	    	autorRepositorio.deleteById(idAutor);
	        //No vale return ResponseEntity.ok().body("Autor borrado correctamente.") porque eso devuelve String, no json
	        return ResponseEntity.ok(Map.of("mensaje", "Autoro borrado correctamente."));
	    }
	}
}
