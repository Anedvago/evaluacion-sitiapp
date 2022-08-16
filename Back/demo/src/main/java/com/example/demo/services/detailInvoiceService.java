package com.example.demo.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.detailInvoiceModel;
import com.example.demo.repositories.detailInvoiceRepository;

@Service
public class detailInvoiceService {
    @Autowired
    detailInvoiceRepository detailInvoiceRepository;

    public ArrayList<detailInvoiceModel> listDetailInvoices() {
        return (ArrayList<detailInvoiceModel> ) detailInvoiceRepository.findAll();
    }

    public detailInvoiceModel insertDetailInvoice(detailInvoiceModel detailInvoice) {
        return detailInvoiceRepository.save(detailInvoice);
    }

    public boolean deleteDetailInvoice(long id) {
        try {
            detailInvoiceRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public Optional<detailInvoiceModel> findInvoiceById(Long id) {
        return detailInvoiceRepository.findById(id);
    }
}
