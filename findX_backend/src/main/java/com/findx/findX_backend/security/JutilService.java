package com.findx.findX_backend.security;

import java.nio.charset.StandardCharsets;
import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
public class JutilService {

	@Value("${jwt.secret}")
	private String SECRET_KEY;
	private final long EXPIRY_TIME = 1000 * 60 * 60 * 1;

	private SecretKey getSecretKey() {

		return Keys.hmacShaKeyFor(SECRET_KEY.getBytes(StandardCharsets.UTF_8));

	}

	public String generateJsonToken(String email) {

		return Jwts.builder().subject(email).issuedAt(new Date())
				.expiration(new Date(System.currentTimeMillis() + EXPIRY_TIME)).signWith(getSecretKey()).compact();

	}

}
