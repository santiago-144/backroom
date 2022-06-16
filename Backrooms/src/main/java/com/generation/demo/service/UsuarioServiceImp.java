package com.generation.demo.service;

import com.generation.demo.model.Usuario;
import com.generation.demo.repository.UsuarioRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import static java.util.Collections.emptyList;


@Service
public class UsuarioServiceImp implements UsuarioService, UserDetailsService{
	
	private final UsuarioRepository usuarioRepository;

    public UsuarioServiceImp(UsuarioRepository userioRepository) {
        this.usuarioRepository = userioRepository;
    }
	
	/*UsuarioRepository usuarioRepository;
	
	public UsuarioServiceImp(@Autowired UsuarioRepository usuarioRepository) {
		this.usuarioRepository = usuarioRepository;
	}*/
	
	@Override
	public Usuario getUsuario(Integer id) {
		Optional<Usuario> usuario = usuarioRepository.findById(id);
		return usuario.orElse(null);
	}

	@Override
	public List<Usuario> getUsuarios() {
		return usuarioRepository.findAll();
	}

	@Override
	public Usuario saveUsuario(Usuario usuario) {
		return usuarioRepository.save(usuario);
		}

	@Override
	public Boolean deleteUsuario(Integer id) {
	 //metodo vacio, manejo de errores y se rompa el codigo usamos el try catch
		
		try {
				usuarioRepository.deleteById(id);
				return true;
			}
			catch(Exception e){
				return false;
			}
			
		}

	@Override
	public Usuario updateUsuario(Usuario usuario) {
		return usuarioRepository.save(usuario);
	}
	
	@Override
    public UserDetails loadUserByUsername(String correo) throws UsernameNotFoundException {
        Usuario user = usuarioRepository.findByCorreo(correo);

        if(user == null) {
            throw new UsernameNotFoundException(correo);
        }
        return new org.springframework.security.core.userdetails.User(user.getCorreo(), user.getPassword(), emptyList());
    }
	
	
}
