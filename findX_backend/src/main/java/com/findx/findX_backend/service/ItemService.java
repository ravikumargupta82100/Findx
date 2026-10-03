package com.findx.findX_backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.security.core.Authentication;

import com.findx.findX_backend.dto.ItemRequestDto;
import com.findx.findX_backend.entity.ItemEntity;
import com.findx.findX_backend.entity.UserDetails;
import com.findx.findX_backend.mapper.ItemMapper;
import com.findx.findX_backend.repository.ItemRepository;
import com.findx.findX_backend.repository.UserRepository;

import lombok.AllArgsConstructor;

@org.springframework.stereotype.Service
@AllArgsConstructor
public class ItemService {
	private final ItemRepository itemRepository;

	private final ItemMapper itemMapper;

	private final UserRepository userRepository;

	public List<ItemEntity> getAllItems(String email) {

		UserDetails user = userRepository.findByEmail(email);

		return itemRepository.findByUserId(user.getId());
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

	public ItemEntity saveItemDetails(ItemRequestDto items, Authentication auth) {
		// TODO Auto-generated method stub

		ItemEntity myItem = itemMapper.toItemEntity(items);

		UserDetails user = userRepository.findByEmail(auth.getName());
		if (user == null) {
			throw new RuntimeException("User not registred ");
		}
		myItem.setUser(user);
		return itemRepository.save(myItem);
	}

	public List<ItemEntity> searchItems(String status, String category, String location) {

		return itemRepository.searchItems(status, category, location);
	}

	public String updateItems(ItemRequestDto itemRequestDto, Long id) {

		ItemEntity items = itemRepository.findById(id).orElseThrow(() -> new RuntimeException("Item not found"));

		ItemEntity updatedItem = itemMapper.toUpdateItem(items, itemRequestDto);

		itemRepository.save(updatedItem);
		return "Updated Successfully";

	}

	public String deleteItemById(Long id) {
		itemRepository.findById(id).orElseThrow(() -> new RuntimeException("Item not found"));

		itemRepository.deleteById(id);
		return "Deleted Successfully";
	}
}
