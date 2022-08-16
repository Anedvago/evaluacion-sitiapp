package com.example.demo.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.detailInvoiceModel;

@Repository
public interface detailInvoiceRepository extends CrudRepository<detailInvoiceModel,Long> {
    
}
