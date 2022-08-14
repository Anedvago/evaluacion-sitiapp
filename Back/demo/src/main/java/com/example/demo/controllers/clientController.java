package com.example.demo.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.clientModel;
import com.example.demo.services.clientService;

@RestController
@RequestMapping("/clients")
public class clientController {
    @Autowired
    clientService clientService;

    @GetMapping()
    public ArrayList<clientModel> listClients() {
        return clientService.listClients();
    }

    @GetMapping(path = "/{identification}")
    public clientModel findClientByIdentification(@PathVariable("identification") String identification) {
        return clientService.findClientByIdentification(identification);
    }

    @GetMapping(path = "/query")
    public ArrayList<clientModel> findClientBusinessName(@RequestParam("businessName") String businessName) {
        return clientService.findClientByBusinessName(businessName);
    }

    @PostMapping()
    public clientModel insertClient(@RequestBody clientModel client) {
        return clientService.insertClient(client);
    }

    @DeleteMapping(path = "/{id}")
    public String deleteClient(@PathVariable("id") long id) {
        boolean eliminated = clientService.deleteClient(id);
        if(eliminated){
            return "was successfully removed";
        }else{
            return "Error deleting";
        }
    }
}
