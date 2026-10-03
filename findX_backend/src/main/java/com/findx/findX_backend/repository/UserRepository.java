package com.findx.findX_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.findx.findX_backend.entity.UserDetails;

@Repository
public interface UserRepository extends JpaRepository<UserDetails, Long> {

	UserDetails findByEmail(String email);

	@Query("SELECT u FROM UserDetails u WHERE u.email = :userEmail AND u.password = :password")
	UserDetails findByEmailAndPassword(@Param("userEmail") String userEmail, @Param("password") String password);

}
