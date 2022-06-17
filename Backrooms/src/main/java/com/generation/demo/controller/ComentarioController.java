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
import com.generation.demo.model.Comentario;
import com.generation.demo.service.ComentarioService;

@RestController
@RequestMapping("api/backroom/comentario")
public class ComentarioController {

private final ComentarioService comentarioService;
	
	public ComentarioController(@Autowired ComentarioService comentarioService) {
		this.comentarioService = comentarioService;
	}
	
	// Leer
			@GetMapping("/{id}")
			public Comentario getComentario(@PathVariable Integer id) {
				return comentarioService.getComentario(id);
			}
			
			@GetMapping("/all")
			public List<Comentario> getComentarios(){
				return comentarioService.getComentarios();
			}
			
			
			// Escribir 
			@PostMapping
			public Comentario saveComentario(@RequestBody Comentario comentario) {
				return comentarioService.saveComentario(comentario);
		
			}
			
			//Borrar
			
			@DeleteMapping("/delete/{id}")
			public void deleteComentario(@PathVariable Integer id) {
				comentarioService.deleteComentario(id);
			}
			// Actualizar
			@PutMapping
			public Comentario updateComentario(@RequestBody Comentario comentario) {
				return comentarioService.updateComentario(comentario);
			}
}
