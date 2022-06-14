package com.generation.demo.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import com.generation.demo.model.Usuario;
import com.generation.demo.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

@Service
public class UsuarioServiceImp implements UsuarioService{
	
	
	UsuarioRepository usuarioRepository;
	
	public UsuarioServiceImp(@Autowired UsuarioRepository usuarioRepository) {
		this.usuarioRepository = usuarioRepository;
	}
	
	@Override
	public Usuario getUsuario(Integer id) {
		Optional<Usuario> usuario = usuarioRepository.findById(id);
		return usuario.orElse(null);
	}

	@Override
	public List<Usuario> getUsuarios() {
		return usuarioRepository.findAll();
	}

	@Override
	public Usuario saveUsuario(Usuario usuario) {
		return usuarioRepository.save(usuario);
		}

	@Override
	public Boolean deleteUsuario(Integer id) {
	 //metodo vacio, manejo de errores y se rompa el codigo usamos el try catch
		
		try {
				usuarioRepository.deleteById(id);
				return true;
			}
			catch(Exception e){
				return false;
			}
			
		}

	@Override
	public Usuario updateUsuario(Usuario usuario) {
		return usuarioRepository.save(usuario);
	}
	

	
	
}
