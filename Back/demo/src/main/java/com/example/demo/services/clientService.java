package com.example.demo.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.clientModel;
import com.example.demo.repositories.clientRepository;

@Service
public class clientService {

    @Autowired
    clientRepository clientRepository;

    public ArrayList<clientModel> listClients() {
        return (ArrayList<clientModel>) clientRepository.findAll();
    }

    public clientModel insertClient(clientModel client) {
        return clientRepository.save(client);
    }

    public boolean deleteClient(long id) {
        try {
            clientRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public clientModel findClientByIdentification(String identification) {
        return clientRepository.findByIdentification(identification);
    }

    public ArrayList<clientModel> findClientByBusinessName(String businessName) {
        return clientRepository.findByBusinessName(businessName);
    }

}
