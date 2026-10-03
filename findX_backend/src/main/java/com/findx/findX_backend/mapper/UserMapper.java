package com.findx.findX_backend.mapper;

import org.springframework.stereotype.Component;

import com.findx.findX_backend.dto.LoginResponseDto;
import com.findx.findX_backend.dto.UserRegisterDto;
import com.findx.findX_backend.entity.UserDetails;

@Component
public class UserMapper {

	public UserDetails toUserEntity(UserRegisterDto userRegisterDto) {
		// TODO Auto-generated method stub
		UserDetails users = new UserDetails();
		users.setEmail(userRegisterDto.getEmail());
		users.setFullName(userRegisterDto.getFullName());
		users.setPhoneNumber(userRegisterDto.getPhoneNumber());
		users.setPassword(userRegisterDto.getPassword());

		return users;
	}

	public LoginResponseDto toLoginResponse(UserDetails user, String token) {
		// TODO Auto-generated method stub

		LoginResponseDto logindto = new LoginResponseDto();
		logindto.setEmail(user.getEmail());
		logindto.setFullname(user.getFullName());
		logindto.setToken(token);
		logindto.setUserId(user.getId());
		return logindto;
	}

}
