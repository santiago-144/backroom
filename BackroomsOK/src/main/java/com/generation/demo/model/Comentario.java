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
@Table(name = "comentarios")
public class Comentario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false, name="comentario_id")
	private Integer id;
	
	@Column(name="comentario")
	private String comentario;
	
	@Column(name="reaccion")
	private Integer reaccion;
	
	@ManyToOne
	@JoinColumn(nullable = false, name="post_id")
	@JsonProperty(access = Access.WRITE_ONLY)
	private Publicacion publicacion;
	@ManyToOne
	@JoinColumn(nullable = false, name="registro_id")
	@JsonProperty(access = Access.WRITE_ONLY)
	private Usuario usuario;

	
	//setters y getters
	
	public Integer getId() {
		return id;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getComentario() {
		return comentario;
	}

	public void setComentario(String comentario) {
		this.comentario = comentario;
	}

	public Integer getReaccion() {
		return reaccion;
	}

	public void setReaccion(Integer reaccion) {
		this.reaccion = reaccion;
	}

	public Publicacion getPublicacion() {
		return publicacion;
	}

	public void setPublicacion(Publicacion publicacion) {
		this.publicacion = publicacion;
	}


	
	
	
	
}
