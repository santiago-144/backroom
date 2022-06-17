package com.generation.demo.service;

import java.util.List;

import com.generation.demo.model.Publicacion;

public interface PublicacionService {

	Publicacion getPublicacion(Integer id);
	List<Publicacion> getPublicacion();
	
	Publicacion savePublicacion(Publicacion publicacion);
	
	Boolean deletePublicacion(Integer id);
	
	Publicacion updatePublicacion(Publicacion publicacion);
	
}
