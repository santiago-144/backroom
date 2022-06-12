package com.generation.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.generation.demo.model.Publicacion;
import com.generation.demo.service.PublicacionService;


@RestController
@RequestMapping("/api/backroom/publicacion")
public class PublicacionController {
	
private final PublicacionService publicacionService;
	
	public PublicacionController(@Autowired PublicacionService publicacionService) {
		this.publicacionService = publicacionService;
	}
	
	// Leer
			@GetMapping("/{id}")
			public Publicacion getPublicacion(@PathVariable Integer id) {
				return publicacionService.getPublicacion(id);
			}
			
			@GetMapping("/all")
			public List<Publicacion> getPublicacion(){
				return publicacionService.getPublicacion();
			}
			
			
			// Escribir 
			@PostMapping
			public Publicacion savePublicacion(@RequestBody Publicacion publicacion) {
				return publicacionService.savePublicacion(publicacion);
		
			}
			
			//Borrar
			
			@DeleteMapping("/delete/{id}")
			public void deletePublicacion(@PathVariable Integer id) {
				publicacionService.deletePublicacion(id);
			}
			// Actualizar
			@PutMapping
			public Publicacion updatePublicacion(@RequestBody Publicacion publicacion) {
				return publicacionService.updatePublicacion(publicacion);
			}
	
	
	
	
}
