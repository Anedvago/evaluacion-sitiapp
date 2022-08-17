package com.example.demo.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.identificationTypeModel;
import com.example.demo.repositories.identificationTypeRepository;

@Service
public class identificationTypeService {
    @Autowired
    identificationTypeRepository identificationTypeRepository;

    public ArrayList<identificationTypeModel> listIdentificationTypes() {
        return (ArrayList<identificationTypeModel>) identificationTypeRepository.findAll();
    }
    public identificationTypeModel insertIdentificationType(identificationTypeModel identificationType) {
        return identificationTypeRepository.save(identificationType);
    }

}
