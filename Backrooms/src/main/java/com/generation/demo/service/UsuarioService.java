package com.generation.demo.service;

import java.util.List;
import com.generation.demo.model.Usuario;

public interface UsuarioService {

	Usuario getUsuario(Integer id);
	List<Usuario> getUsuarios();
	
	Usuario getUsuarioByCorreo(String correo);
	
	Usuario saveUsuario(Usuario usuario);
	
	Boolean deleteUsuario(Integer id);
	
	Usuario updateUsuario(Usuario usuario);
	
	
	
}
