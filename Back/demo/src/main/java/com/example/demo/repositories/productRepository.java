package com.example.demo.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.productModel;

@Repository
public interface productRepository extends CrudRepository<productModel,Long> {
    
}
