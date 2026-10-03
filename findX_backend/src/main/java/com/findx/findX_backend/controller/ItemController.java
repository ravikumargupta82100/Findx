package com.findx.findX_backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	public ResponseEntity<List<ItemEntity>> getAllItems(Authentication auth) {

		String email = auth.getName();

		return new ResponseEntity<>(itemService.getAllItems(email), HttpStatus.OK);
	}

	@GetMapping("/search")
	public ResponseEntity<List<ItemEntity>> searchItems(@RequestParam(required = false) String status,
			@RequestParam(required = false) String category, @RequestParam(required = false) String location) {

		return new ResponseEntity<>(itemService.searchItems(status, category, location), HttpStatus.OK);
	}

	@GetMapping("/item-details/{id}")
	public ResponseEntity<ItemEntity> getItemDetails(@PathVariable Long id) {

		return new ResponseEntity<>(itemService.getItemDetails(id), HttpStatus.OK);
	}

	@PostMapping("/create-item")
	public ResponseEntity<ItemEntity> addfoundLostItem(@RequestBody ItemRequestDto items, Authentication auth) {
		return new ResponseEntity<>(itemService.saveItemDetails(items, auth), HttpStatus.CREATED);

	}

	@PutMapping("/updatedItems/{id}")
	public ResponseEntity<String> updateReportDetails(@RequestBody ItemRequestDto itemRequestDto,
			@PathVariable Long id) {
		String msg = itemService.updateItems(itemRequestDto, id);
		return new ResponseEntity<>(msg, HttpStatus.OK);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteItem(@PathVariable Long id) {
		return new ResponseEntity<>(itemService.deleteItemById(id), HttpStatus.OK);
	}
}
