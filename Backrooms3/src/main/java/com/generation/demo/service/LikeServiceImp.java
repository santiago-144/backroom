package com.generation.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.demo.model.Like;
import com.generation.demo.repository.LikeRepository;

@Service
public class LikeServiceImp implements LikeService{

LikeRepository likeRepository;
	
	public LikeServiceImp(@Autowired LikeRepository likeRepository) {
		this.likeRepository = likeRepository;
	}
	
	
	
	@Override
	public Like getLike(Integer id) {
		Optional<Like> like = likeRepository.findById(id);
		return like.orElse(null);
	}

	@Override
	public List<Like> getLikes() {
		return likeRepository.findAll();
	}

	@Override
	public Like saveLike(Like like) {
		return likeRepository.save(like);
	}

	@Override
	public Boolean deleteLike(Integer id) {
		
		try {
				likeRepository.deleteById(id);
				return true;
			}
			catch(Exception e){
				return false;
			}
			
	}

	@Override
	public Like updateLike(Like like) {
		return likeRepository.save(like);
	}


}
