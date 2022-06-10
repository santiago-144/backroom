package com.generation.demo.service;

import java.util.List;

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
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Comentario> getComentario() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Comentario saveComentario(Comentario comentario) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Boolean deleteComentario(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Comentario updateComentario(Comentario comentario) {
		// TODO Auto-generated method stub
		return null;
	}

}
