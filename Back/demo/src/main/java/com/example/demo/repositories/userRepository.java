package com.example.demo.repositories;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.models.userModel;

@Repository
public interface userRepository extends CrudRepository<userModel,Long> {
    public abstract ArrayList<userModel> findByUser(String user);

    @Query(nativeQuery = true, value = "SELECT * FROM user WHERE user  = :username AND password = :password")
	Optional<userModel> login(@Param("username")String username,@Param("password")String password);
}
