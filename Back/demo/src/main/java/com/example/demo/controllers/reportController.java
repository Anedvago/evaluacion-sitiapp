package com.example.demo.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.reportService;

@RestController
@RequestMapping("/reports")
@CrossOrigin("http://localhost:4200")
public class reportController {
    @Autowired
    reportService reportService;

    @GetMapping()
    public ArrayList<?> listReportOne() {
        return reportService.obtainReportOne();
    }

    @GetMapping(path = "/2")
    public ArrayList<?> listReportTwo() {
        return reportService.obtainReportTwo();
    }
}
