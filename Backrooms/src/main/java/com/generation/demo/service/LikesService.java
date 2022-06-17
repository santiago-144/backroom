package com.generation.demo.service;

import java.util.List;

import com.generation.demo.model.Likes;

public interface LikesService {
	Likes getLikes(Integer id);
	List<Likes> getLikess();
	
	Likes saveLikes(Likes likes);
	
	Boolean deleteLikes(Integer id);
	
	Likes updateLikes(Likes likes);
	

}
