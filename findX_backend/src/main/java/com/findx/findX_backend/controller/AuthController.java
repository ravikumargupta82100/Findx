package com.findx.findX_backend.controller;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.findx.findX_backend.dto.LoginResponseDto;
import com.findx.findX_backend.dto.UserLoginDto;
import com.findx.findX_backend.dto.UserRegisterDto;
import com.findx.findX_backend.entity.UserDetails;
import com.findx.findX_backend.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

	final private UserService userService;

	@PostMapping("/register")
	public ResponseEntity<?> getRegistration(@RequestBody UserRegisterDto dto) {

		try {
			UserDetails user = userService.saveRegister(dto);

			return ResponseEntity.ok(user);

		} catch (RuntimeException e) {

			return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
		}
	}

	@PostMapping("/login")
	public ResponseEntity<LoginResponseDto> userLogin(@RequestBody UserLoginDto userLoginDto) {

		return new ResponseEntity<>(userService.login(userLoginDto), HttpStatus.OK);

	}

}
