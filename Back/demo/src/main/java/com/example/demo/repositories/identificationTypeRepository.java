package com.example.demo.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.identificationTypeModel;

@Repository
public interface identificationTypeRepository extends CrudRepository<identificationTypeModel,Long> {

    
}
