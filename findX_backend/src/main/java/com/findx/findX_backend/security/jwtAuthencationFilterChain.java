package com.findx.findX_backend.security;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class jwtAuthencationFilterChain extends OncePerRequestFilter {

	@Value("${jwt.secret}")
	private String SECRET_KEY;

	private SecretKey getSecretKey() {

		return Keys.hmacShaKeyFor(SECRET_KEY.getBytes(StandardCharsets.UTF_8));
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

		String authrqeuest = request.getHeader("Authorization");

		if (authrqeuest == null || !authrqeuest.startsWith("Bearer ")) {
			filterChain.doFilter(request, response);
			return;
		}

		String token = authrqeuest.substring(7);
		try {

			Claims claims = Jwts.parser().verifyWith(getSecretKey()).build().parseSignedClaims(token).getPayload();

			String email = claims.getSubject();

			UsernamePasswordAuthenticationToken authenticationFilter = new UsernamePasswordAuthenticationToken(email,
					null, null);
			SecurityContextHolder.getContext().setAuthentication(authenticationFilter);

		} catch (Exception e) {

			System.out.println("Inavlid Jwt token" + e.getMessage());

		}
		filterChain.doFilter(request, response);

	}

}
