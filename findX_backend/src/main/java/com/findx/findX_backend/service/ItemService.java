package com.findx.findX_backend.service;

import java.util.List;
import java.util.Optional;

import com.findx.findX_backend.dto.ItemRequestDto;
import com.findx.findX_backend.entity.ItemEntity;
import com.findx.findX_backend.mapper.ItemMapper;
import com.findx.findX_backend.repository.ItemRepository;

import lombok.AllArgsConstructor;

@org.springframework.stereotype.Service
@AllArgsConstructor
public class ItemService {
	private final ItemRepository itemRepository;

	private final ItemMapper itemMapper;

	public List<ItemEntity> getAllItems() {

		return itemRepository.findAll();
	}

	public ItemEntity getItemDetails(Long id) {
		// TODO Auto-generated method stub
		Optional<ItemEntity> items = itemRepository.findById(id);

		if (items.isEmpty()) {
			throw new RuntimeException("Item not found with Id");
		} else {
			return items.get();
		}

	}

	public ItemEntity saveItemDetails(ItemRequestDto items) {
		// TODO Auto-generated method stub
		ItemEntity myItem = itemMapper.toItemEntity(items);
		return itemRepository.save(myItem);
	}

}
