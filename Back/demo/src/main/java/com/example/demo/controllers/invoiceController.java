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

import com.example.demo.models.invoiceModel;
import com.example.demo.services.invoiceService;

@RestController
@RequestMapping("/invoices")
@CrossOrigin("http://localhost:4200")
public class invoiceController {
    @Autowired
    invoiceService invoiceService;

    @GetMapping()
    public ArrayList<invoiceModel> listInvoices() {
        return invoiceService.listInvoices();
    }

    @GetMapping(path = "/{consecutive}")
    public Optional<invoiceModel> findInvoiceByConsecutive(@PathVariable("consecutive") Long consecutive) {
        return invoiceService.findProductByConsecutive(consecutive);
    }


    @PostMapping()
    public invoiceModel insertClient(@RequestBody invoiceModel invoice) {
        return invoiceService.insertInvoice(invoice);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> deleteClient(@PathVariable("id") long id) {
        boolean eliminated = invoiceService.deleteInvoice(id);
        if(eliminated){
            return ResponseEntity.ok().build();
        }else{
            return ResponseEntity.badRequest().build();
        }
    }
}
