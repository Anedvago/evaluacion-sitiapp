package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.productModel;
import com.example.demo.services.productService;

@RestController
@RequestMapping("/products")
@CrossOrigin("http://localhost:4200")
public class productController {
    @Autowired
    productService productService;

    @GetMapping()
    public ArrayList<productModel> listProduct() {
        return productService.listProducts();
    }

    @GetMapping(path = "/{id}")
    public Optional<productModel> findProductById(@PathVariable("id") Long id) {
        return productService.findProductById(id);
    }

    @PostMapping()
    public productModel insertProduct(@RequestBody productModel product) {
        return productService.insertProduct(product);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable("id") long id) {
        boolean eliminated = productService.deleteProduct(id);
        if(eliminated){
            return ResponseEntity.ok().build();
        }else{
            return ResponseEntity.badRequest().build();
        }
    }
}
