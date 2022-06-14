package com.generation.demo.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "publicaciones")
public class Publicacion {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false, name="post_id")
	private Integer id;
	
	@Column(nullable = false, name="linkImgPost")
	private String linkpost;
	
	@Column(name="linkProd")
	private String linkprod;
	
	@Column(nullable = false, name="titulo")
	private String titulo;
	
	@Column(nullable = false, name="descripcion")
	private String descripcion;
	
	@ManyToOne
	@JoinColumn(nullable = false, name="registro_id")
	@JsonProperty(access = Access.WRITE_ONLY)
	private Usuario usuario;

	
	/*@OneToMany(mappedBy = "publicaciones") //publicaciones OJO
	private List<Like> like;*/
	//setters y getters
	
	
	/*public List<Like> getLike() {
		return like;
	}

	public void setLike(List<Like> like) {
		this.like = like;
	}*/

	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}

	public String getLinkpost() {
		return linkpost;
	}

	public void setLinkpost(String linkpost) {
		this.linkpost = linkpost;
	}

	public String getLinkprod() {
		return linkprod;
	}

	public void setLinkprod(String linkprod) {
		this.linkprod = linkprod;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

		
}
