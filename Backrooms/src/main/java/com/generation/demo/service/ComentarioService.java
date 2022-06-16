package com.generation.demo.service;

import java.util.List;

import com.generation.demo.model.Comentario;

public interface ComentarioService {

	Comentario getComentario(Integer id);
	List<Comentario> getComentarios();
	
	Comentario saveComentario(Comentario comentario);
	
	Boolean deleteComentario(Integer id);
	
	Comentario updateComentario(Comentario comentario);
}
