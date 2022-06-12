package com.generation.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.generation.demo.model.Comentario;

@Repository
public interface ComentarioRepository extends JpaRepository<Comentario,Integer>{

	
}
