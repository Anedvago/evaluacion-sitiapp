package com.example.demo.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.invoiceModel;
import com.example.demo.repositories.invoiceRepository;

@Service
public class invoiceService {
    @Autowired
    invoiceRepository invoiceRepository;

    public ArrayList<invoiceModel> listInvoices() {
        return (ArrayList<invoiceModel>) invoiceRepository.findAll();
    }

    public invoiceModel insertInvoice(invoiceModel invoice) {
        return invoiceRepository.save(invoice);
    }

    public boolean deleteInvoice(long id) {
        try {
            invoiceRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public Optional<invoiceModel> findInvoiceByConsecutive(Long id) {
        return invoiceRepository.findById(id);
    }
}
