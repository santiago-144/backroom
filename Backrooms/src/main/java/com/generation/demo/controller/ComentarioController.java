package com.generation.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.generation.demo.service.ComentarioService;

@RestController
@RequestMapping("api/backroom/comentario")
public class ComentarioController {

private final ComentarioService comentarioService;
	
	public ComentarioController(@Autowired ComentarioService comentarioService) {
		this.comentarioService = comentarioService;
	}
}
