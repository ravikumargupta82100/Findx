package com.findx.findX_backend.service;

import org.springframework.stereotype.Service;

import com.findx.findX_backend.dto.LoginResponseDto;
import com.findx.findX_backend.dto.UserLoginDto;
import com.findx.findX_backend.dto.UserRegisterDto;
import com.findx.findX_backend.entity.UserDetails;
import com.findx.findX_backend.mapper.UserMapper;
import com.findx.findX_backend.repository.UserRepository;
import com.findx.findX_backend.security.JutilService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
	final private UserRepository userRepository;
	final private JutilService jutilService;

	final private UserMapper userMapper;

	public UserDetails saveRegister(UserRegisterDto userRegisterDto) {
		// TODO Auto-generated method stub

		UserDetails userExist = userRepository.findByEmail(userRegisterDto.getEmail());

		if (userExist != null) {
			throw new RuntimeException("Email alreday exist");
		}

		return userRepository.save(userMapper.toUserEntity(userRegisterDto));

	}

	public LoginResponseDto login(UserLoginDto dto) {

		UserDetails user = userRepository.findByEmail(dto.getEmail());

		if (user == null || !user.getPassword().equalsIgnoreCase(dto.getPassword())) {
			throw new RuntimeException("Email Id and password is invalid");
		}

		String token = jutilService.generateJsonToken(user.getEmail());

		return userMapper.toLoginResponse(user, token);

	}

}
