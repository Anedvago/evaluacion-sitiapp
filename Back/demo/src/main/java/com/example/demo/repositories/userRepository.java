package com.example.demo.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.userModel;

@Repository
public interface userRepository extends CrudRepository<userModel,Long> {
    public abstract ArrayList<userModel> findByUser(String user);
}
