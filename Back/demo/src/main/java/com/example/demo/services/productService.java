package com.example.demo.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.productModel;
import com.example.demo.repositories.productRepository;

@Service
public class productService {
    @Autowired
    productRepository productRepository;

    public ArrayList<productModel> listProducts() {
        return (ArrayList<productModel>) productRepository.findAll();
    }

    public productModel insertProduct(productModel product) {
        return productRepository.save(product);
    }

    public boolean deleteProduct(long id) {
        try {
            productRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public Optional<productModel> findProductById(Long id) {
        return productRepository.findById(id);
    }

    
}
