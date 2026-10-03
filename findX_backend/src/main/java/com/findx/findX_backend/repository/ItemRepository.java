package com.findx.findX_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.findx.findX_backend.entity.ItemEntity;

@Repository
public interface ItemRepository extends JpaRepository<ItemEntity, Long> {

	List<ItemEntity> findByUserId(Long id);

	@Query("""
			    SELECT i FROM ItemEntity i
			    WHERE (:itemName IS NULL OR LOWER(i.itemName) LIKE LOWER(CONCAT('%', CAST(:itemName AS string), '%')))
			      AND (:category IS NULL OR LOWER(i.category) LIKE LOWER(CONCAT('%', CAST(:category AS string), '%')))
			      AND (:location IS NULL OR LOWER(i.location) LIKE LOWER(CONCAT('%', CAST(:location AS string), '%')))
			""")
	List<ItemEntity> searchItems(@Param("itemName") String itemName, @Param("category") String category,
			@Param("location") String location);

}
