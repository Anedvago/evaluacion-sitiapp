package com.example.demo.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.invoiceModel;

@Repository
public interface invoiceRepository extends CrudRepository<invoiceModel,Long> {
    
}