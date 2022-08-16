package com.example.demo.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.repositories.reportRepository;

@Service
public class reportService {
    @Autowired
    reportRepository reportRepository;

    public ArrayList<?> obtainReportOne() {
        return (ArrayList<?>) reportRepository.obtainReportOne();
    }
}
