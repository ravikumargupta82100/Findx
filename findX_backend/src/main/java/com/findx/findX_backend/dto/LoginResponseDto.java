package com.findx.findX_backend.dto;

import lombok.Data;

@Data
public class LoginResponseDto {

	private Long userId;
	private String email;
	private String token;
	private String fullname;

}
