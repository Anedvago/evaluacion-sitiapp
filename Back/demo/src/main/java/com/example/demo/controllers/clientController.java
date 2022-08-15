package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.clientModel;
import com.example.demo.services.clientService;

@RestController
@RequestMapping("/clients")
@CrossOrigin("http://localhost:4200")
public class clientController {
    @Autowired
    clientService clientService;

    @GetMapping()
    public ArrayList<clientModel> listClients() {
        return clientService.listClients();
    }

    @GetMapping(path = "/{identification}/{type}")
    public Optional<clientModel> findClientByIdentificationAndType(@PathVariable("identification") String identification,@PathVariable("type") Long type) {
        return clientService.findClientByIdentificationAndType(type,identification);
    }


    @PostMapping()
    public clientModel insertClient(@RequestBody clientModel client) {
        return clientService.insertClient(client);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> deleteClient(@PathVariable("id") long id) {
        boolean eliminated = clientService.deleteClient(id);
        if(eliminated){
            return ResponseEntity.ok().build();
        }else{
            return ResponseEntity.badRequest().build();
        }
    }
}
