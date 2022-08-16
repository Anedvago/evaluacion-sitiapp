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

import com.example.demo.models.detailInvoiceModel;
import com.example.demo.services.detailInvoiceService;

@RestController
@RequestMapping("/detail-invoices")
@CrossOrigin("http://localhost:4200")
public class detailInvoiceController {
    @Autowired
    detailInvoiceService detailInvoiceService;

    @GetMapping()
    public ArrayList<detailInvoiceModel> listDetailInvoices() {
        return detailInvoiceService.listDetailInvoices();
    }

    @GetMapping(path = "/{id}")
    public Optional<detailInvoiceModel> findDetailInvoiceById(@PathVariable("id") Long id) {
        return detailInvoiceService.findInvoiceById(id);
    }


    @PostMapping()
    public detailInvoiceModel insertDetailInvoice(@RequestBody detailInvoiceModel detailInvoice) {
        return detailInvoiceService.insertDetailInvoice(detailInvoice);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> deletedetailInvoice(@PathVariable("id") long id) {
        boolean eliminated = detailInvoiceService.deleteDetailInvoice(id);
        if(eliminated){
            return ResponseEntity.ok().build();
        }else{
            return ResponseEntity.badRequest().build();
        }
    }
}
