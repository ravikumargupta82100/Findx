package com.findx.findX_backend.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "ITEMS_TABLE")
public class ItemEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String itemName;

	private String category;

	@Column(length = 1000)
	private String description;

	private String location;

	private String status;
	private String itemImage;
	private LocalDateTime lostFoundDateTime;

}
