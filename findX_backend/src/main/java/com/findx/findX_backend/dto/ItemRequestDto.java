package com.findx.findX_backend.dto;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class ItemRequestDto {

	private String itemName;

	private String category;

	private String description;

	private String location;

	private String status;
	private String itemImage;
	private LocalDateTime lostFoundDateTime;

}