package com.findx.findX_backend.mapper;

import org.springframework.stereotype.Component;

import com.findx.findX_backend.dto.ItemRequestDto;
import com.findx.findX_backend.entity.ItemEntity;

@Component
public class ItemMapper {

	public ItemEntity toItemEntity(ItemRequestDto items) {

		ItemEntity newItem = new ItemEntity();

		newItem.setCategory(items.getCategory());
		newItem.setItemName(items.getItemName());
		newItem.setDescription(items.getDescription());
		newItem.setItemImage(items.getItemImage());
		newItem.setLocation(items.getLocation());
		newItem.setLostFoundDateTime(items.getLostFoundDateTime());
		newItem.setStatus(items.getStatus());

		// TODO Auto-generated method stub
		return newItem;
	}

	public ItemEntity toUpdateItem(ItemEntity items, ItemRequestDto itemRequestDto) {

		items.setCategory(itemRequestDto.getCategory());
		items.setDescription(itemRequestDto.getDescription());
		items.setItemImage(itemRequestDto.getItemImage());
		items.setItemName(itemRequestDto.getItemName());
		items.setLostFoundDateTime(itemRequestDto.getLostFoundDateTime());
		items.setStatus(itemRequestDto.getStatus());
		items.setLocation(itemRequestDto.getLocation());

		return items;
	}

}
