package com.findx.findX_backend.dto;

import lombok.Data;

@Data
public class UserRegisterDto {
	private String fullName;
	private String email;
	private String phoneNumber;
	private String password;

}
