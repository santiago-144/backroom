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
import com.generation.demo.model.Like;
import com.generation.demo.service.LikeService;

@RestController
@RequestMapping("/api/backroom/like")
public class LikeController {
		private final LikeService likeService;
		
		public LikeController(@Autowired LikeService likeService) {
			this.likeService = likeService;
		}

		// Leer
			@GetMapping("/{id}")
			public Like getLike(@PathVariable Integer id) {
				return likeService.getLike(id);
			}
			
			@GetMapping("/all")
			public List<Like> getLikes(){
				return likeService.getLikes();
			}
			
			
			// Escribir 
			@PostMapping
			public Like saveLike(@RequestBody Like like) {
				return likeService.saveLike(like);
		
			}
			
			//Borrar
			
			@DeleteMapping("/delete/{id}")
			public void deleteLike(@PathVariable Integer id) {
				likeService.deleteLike(id);
			}
			// Actualizar
			@PutMapping
			public Like updateLike(@RequestBody Like like) {
				return likeService.updateLike(like);
			}
	
}
