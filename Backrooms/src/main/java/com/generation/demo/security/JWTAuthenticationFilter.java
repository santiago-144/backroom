package com.generation.demo.security;

import static com.generation.demo.security.Constants.HEADER_AUTHORIZACION_KEY;
import static com.generation.demo.security.Constants.ISSUER_INFO;
import static com.generation.demo.security.Constants.SUPER_SECRET_KEY;
import static com.generation.demo.security.Constants.TOKEN_BEARER_PREFIX;
import static com.generation.demo.security.Constants.TOKEN_EXPIRATION_TIME;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.generation.demo.model.Usuario;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private AuthenticationManager authenticationManager;//USUARIO Y PASSWORD

    public JWTAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws AuthenticationException {
        try {
            Usuario credentials = new ObjectMapper().readValue(request.getInputStream(), Usuario.class);
            //SE CREA UN OBJETO A PARTIR DE USUARIO, CAMBIAR USUARIO
            return authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    credentials.getCorreo(), credentials.getPassword(), new ArrayList<>()));
        } catch (IOException e) { //CAMBIAR GETERS Y SETERS VER EN FUNCION DEL MODELO
            throw new RuntimeException(e);
        }
    } //AQUI VERIFICA QUE ESTA REGISTRADO

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
                                            Authentication auth) throws IOException, ServletException {

        String token = Jwts.builder().setIssuedAt(new Date()).setIssuer(ISSUER_INFO)
                .setSubject(((org.springframework.security.core.userdetails.User)auth.getPrincipal()).getUsername())
                .setExpiration(new Date(System.currentTimeMillis() + TOKEN_EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SUPER_SECRET_KEY).compact();
        response.addHeader(HEADER_AUTHORIZACION_KEY, TOKEN_BEARER_PREFIX + token); //NO SE LE MUEVE A NADA
    }
}

