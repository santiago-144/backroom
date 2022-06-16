package com.generation.demo.model;

import javax.persistence.Table;



import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
@Table(name="usuario")
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false, name="registro_id")
	private Integer id;
	
	@Column(nullable = false, name="nombre")
	private String nombre;
	
	@Column(nullable = false, name="usuario",unique=true)
	private String usuario;
	
	@Column(nullable = false, name="correo",unique=true)
	private String correo;
	
	@Column(nullable = false, name="password")
	private String password;
	
	@Column(name="imgPerfil")
	private String linkImgPerfil;
	

	//Especificar la union con alumno, las que tienen join son las foraneas
	@OneToMany(mappedBy = "usuario") //publicaciones OJO
	private List<Publicacion> publicaciones; //publicaciones
	@OneToMany(mappedBy = "usuario") //publicaciones OJO
	private List<Comentario> comentarios;
	@OneToMany(mappedBy = "usuario") //publicaciones OJO
	private List<Likes> likes;
	
	//getters y setters
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public String getCorreo() {
		return correo;
	}
	public void setCorreo(String correo) {
		this.correo = correo;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getLinkImgPerfil() {
		return linkImgPerfil;
	}
	public void setLinkImgPerfil(String linkImgPerfil) {
		this.linkImgPerfil = linkImgPerfil;
	}
	public List<Publicacion> getPublicaciones() {
		return publicaciones;
	}
	public void setPublicaciones(List<Publicacion> publicaciones) {
		this.publicaciones = publicaciones;
	}
	public List<Comentario> getComentarios() {
		return comentarios;
	}
	public void setComentarios(List<Comentario> comentarios) {
		this.comentarios = comentarios;
	}
	public List<Likes> getLikes() {
		return likes;
	}
	public void setLikes(List<Likes> likes) {
		this.likes = likes;
	}
	
		
}
