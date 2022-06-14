package com.generation.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.demo.model.Comentario;
import com.generation.demo.repository.ComentarioRepository;

@Service
public class ComentarioServiceImp implements ComentarioService {
	
ComentarioRepository comentarioRepository;
	
	public ComentarioServiceImp(@Autowired ComentarioRepository comentarioRepository) {
		this.comentarioRepository = comentarioRepository;
	}
	
	
	

	@Override
	public Comentario getComentario(Integer id) {
		Optional<Comentario> comentario = comentarioRepository.findById(id);
		return comentario.orElse(null);
	}

	@Override
	public List<Comentario> getComentarios() {
		return comentarioRepository.findAll();

	}

	@Override
	public Comentario saveComentario(Comentario comentario) {
		return comentarioRepository.save(comentario);
	}

	@Override
	public Boolean deleteComentario(Integer id) {
		try {
			comentarioRepository.deleteById(id);
			return true;
		}
		catch(Exception e){
			return false;
		}
		
	}

	@Override
	public Comentario updateComentario(Comentario comentario) {
		return comentarioRepository.save(comentario);
		}

}
