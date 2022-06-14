package com.generation.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name="like")
public class Like {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false, name="like_id")
	private Integer id;
	
	@Column(name="comentarioLike")
	private String comentarioLike;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getComentarioLike() {
		return comentarioLike;
	}

	public void setComentarioLike(String comentarioLike) {
		this.comentarioLike = comentarioLike;
	}
	
	/*@ManyToOne
	@JoinColumn(nullable = false, name="post_id")
	@JsonProperty(access = Access.WRITE_ONLY)
	private Publicacion publicaciones;*/

	//@OneToOne
	//@JoinColumn(nullable = false, name="registro_id")
	//@JsonProperty(access = Access.WRITE_ONLY)
	//private Usuario usuario;

	
	
	
}
