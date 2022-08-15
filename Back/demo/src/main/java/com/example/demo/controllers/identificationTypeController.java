package com.example.demo.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.identificationTypeModel;
import com.example.demo.services.identificationTypeService;

@RestController
@RequestMapping("/idtypes")
@CrossOrigin("http://localhost:4200")
public class identificationTypeController {
    @Autowired
    identificationTypeService identificationTypeService;

    @GetMapping()
    public ArrayList<identificationTypeModel> listIdentificationTypes() {
        return identificationTypeService.listIdentificationTypes();
    }
}
