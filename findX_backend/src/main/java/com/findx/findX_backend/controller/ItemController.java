package com.findx.findX_backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.findx.findX_backend.dto.ItemRequestDto;
import com.findx.findX_backend.entity.ItemEntity;
import com.findx.findX_backend.service.ItemService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/item")
@AllArgsConstructor
public class ItemController {

	private final ItemService itemService;

	@GetMapping
	public ResponseEntity<List<ItemEntity>> getAllItems() {

		return new ResponseEntity<>(itemService.getAllItems(), HttpStatus.OK);
	}

	@GetMapping("/item-details/{id}")
	public ResponseEntity<ItemEntity> getItemDetails(@PathVariable Long id) {

		return new ResponseEntity<>(itemService.getItemDetails(id), HttpStatus.OK);
	}

	@PostMapping("/create-item")
	public ResponseEntity<ItemEntity> addfoundLostItem(@RequestBody ItemRequestDto items) {
		return new ResponseEntity<>(itemService.saveItemDetails(items), HttpStatus.CREATED);

	}
}
