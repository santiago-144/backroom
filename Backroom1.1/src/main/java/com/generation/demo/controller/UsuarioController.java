package com.generation.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.generation.demo.model.Usuario;
import com.generation.demo.service.UsuarioService;


@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE,
        RequestMethod.PUT }) //aqui agregamos que puede recibir de donde sea
@RequestMapping("/api/backroom/usuario")
public class UsuarioController {

private final UsuarioService usuarioService;
	
	public UsuarioController(@Autowired UsuarioService usuarioService) {
		this.usuarioService = usuarioService;
	}

	// Leer
		@GetMapping("/{id}")
		public Usuario getUsuario(@PathVariable Integer id) {
			return usuarioService.getUsuario(id);
		}
		
		@GetMapping("/all")
		public List<Usuario> getUsuarios(){
			return usuarioService.getUsuarios();
		}
		
		
		// Escribir 
		@PostMapping
		public Usuario saveUsuario(@RequestBody Usuario usuario) {
			return usuarioService.saveUsuario(usuario);
	
		}
		
		//Borrar
		
		@DeleteMapping("/delete/{id}")
		public void deleteUsuario(@PathVariable Integer id) {
			usuarioService.deleteUsuario(id);
		}
		// Actualizar
		@PutMapping
		public Usuario updateUsuario(@RequestBody Usuario usuario) {
			return usuarioService.updateUsuario(usuario);
		}
}
