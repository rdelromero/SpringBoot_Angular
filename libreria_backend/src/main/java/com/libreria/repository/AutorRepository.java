package com.libreria.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.libreria.modelo.entities.Autor;

@Repository
public interface AutorRepository extends JpaRepository<Autor, Integer>{
	Optional<Autor> findByDireccionEmail(String email);
	List<Autor> findByNacionalidad(String nacionalidad);
	
	/*Equivale a
	 * @Query("SELECT a FROM Autor a WHERE a.nacionalidad = :nacionalidad")
    List<Autor> findByNacionalidad(@Param("nacionalidad") String nacionalidad);
	 */
}
