package com.generation.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.generation.demo.model.Like;

@Repository
public interface LikeRepository extends JpaRepository<Like, Integer>{
	//metodos personalizados
	

}
