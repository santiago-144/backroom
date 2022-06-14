package com.generation.demo.service;

import java.util.List;
import com.generation.demo.model.Like;


public interface LikeService {

	Like getLike(Integer id);
	List<Like> getLikes();
	
	Like saveLike(Like like);
	
	Boolean deleteLike(Integer id);
	
	Like updateLike(Like like);
	
}
