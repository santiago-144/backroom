package com.generation.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.generation.demo.model.Likes;
import com.generation.demo.repository.LikesRepository;

public class LikesServiceImp implements LikesService{

LikesRepository likesRepository;
	
	public LikesServiceImp(@Autowired LikesRepository likesRepository) {
		this.likesRepository = likesRepository;
	}
	
	
	
	@Override
	public Likes getLikes(Integer id) {
		Optional<Likes> likes = likesRepository.findById(id);
		return likes.orElse(null);
	}

	@Override
	public List<Likes> getLikess() {
		return likesRepository.findAll();
	}

	@Override
	public Likes saveLikes(Likes likes) {
		return likesRepository.save(likes);
	}

	@Override
	public Boolean deleteLikes(Integer id) {
		
		try {
				likesRepository.deleteById(id);
				return true;
			}
			catch(Exception e){
				return false;
			}
			
	}

	@Override
	public Likes updateLikes(Likes likes) {
		return likesRepository.save(likes);
	}



}

