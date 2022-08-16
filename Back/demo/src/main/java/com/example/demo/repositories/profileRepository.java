package com.example.demo.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.profileModel;

@Repository
public interface profileRepository extends CrudRepository<profileModel,Long> {
    
}
