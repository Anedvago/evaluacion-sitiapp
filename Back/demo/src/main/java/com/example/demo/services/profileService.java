package com.example.demo.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.profileModel;
import com.example.demo.repositories.profileRepository;

@Service
public class profileService {
    @Autowired
    profileRepository profileRepository;

    public ArrayList<profileModel> listProfiles() {
        return (ArrayList<profileModel>) profileRepository.findAll();
    }
    public profileModel insertProfile(profileModel profile) {
        return profileRepository.save(profile);
    }
}
