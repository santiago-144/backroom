package com.generation.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.generation.demo.model.Likes;
import com.generation.demo.service.LikesService;

public class LikesController {
	private final LikesService likesService;
	
	public LikesController(@Autowired LikesService likesService) {
		this.likesService = likesService;
	}

	// Leer
		@GetMapping("/{id}")
		public Likes getLikes(@PathVariable Integer id) {
			return likesService.getLikes(id);
		}
		
		@GetMapping("/all")
		public List<Likes> getLikess(){
			return likesService.getLikess();
		}
		
		
		// Escribir 
		@PostMapping
		public Likes saveLikes(@RequestBody Likes likes) {
			return likesService.saveLikes(likes);
	
		}
		
		//Borrar
		
		@DeleteMapping("/delete/{id}")
		public void deleteLikes(@PathVariable Integer id) {
			likesService.deleteLikes(id);
		}
		// Actualizar
		@PutMapping
		public Likes updateLikes(@RequestBody Likes likes) {
			return likesService.updateLikes(likes);
		}

}
