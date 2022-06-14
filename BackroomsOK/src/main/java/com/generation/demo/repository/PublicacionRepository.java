package com.generation.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.generation.demo.model.Publicacion;

@Repository
public interface PublicacionRepository extends JpaRepository<Publicacion, Integer>{

}
