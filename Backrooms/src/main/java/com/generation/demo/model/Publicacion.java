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
	
	@Column(nullable = false, name="numReaccion")
	private Integer numReaccion;

	@Column(nullable = false, name="reaccion")
	private boolean bolReaccion;
	
	@Column(nullable = false, name="descripcion")
	private String descripcion;
	
	@ManyToOne
	@JoinColumn(nullable = false, name="registro_id")
	@JsonProperty(access = Access.WRITE_ONLY)
	private Usuario usuario;


	//setters y getters
	
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

	public Integer getNumReaccion() {
		return numReaccion;
	}

	public void setNumReaccion(Integer numReaccion) {
		this.numReaccion = numReaccion;
	}

	public boolean isBolReaccion() {
		return bolReaccion;
	}

	public void setBolReaccion(boolean bolReaccion) {
		this.bolReaccion = bolReaccion;
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
