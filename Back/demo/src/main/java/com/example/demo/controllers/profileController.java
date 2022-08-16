package com.example.demo.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.profileModel;
import com.example.demo.services.profileService;

@RestController
@RequestMapping("/profiles")
@CrossOrigin("http://localhost:4200")
public class profileController {
    @Autowired
    profileService profileService;

    @GetMapping()
    public ArrayList<profileModel> listIdentificationTypes() {
        return profileService.listProfiles();
    }
}
