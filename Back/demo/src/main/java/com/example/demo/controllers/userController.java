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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.userModel;
import com.example.demo.services.userService;

@RestController
@RequestMapping("/users")
@CrossOrigin("http://localhost:4200")
public class userController {

    @Autowired
    userService userService;

    @GetMapping()
    public ArrayList<userModel> listUsers() {
        return userService.listUsers();
    }

    @GetMapping(path = "/{id}")
    public Optional<userModel> findUserById(@PathVariable("id") Long id) {
        return userService.findUserById(id);
    }

    @GetMapping(path = "/{user}/{pass}")
    public Optional<userModel> login(@PathVariable("user") String username,@PathVariable("pass") String password) {
        return userService.login(username, password);
    }

    @GetMapping(path = "/query")
    public ArrayList<userModel> findUserByUsername(@RequestParam("username") String username) {
        return userService.findUserByUsername(username);
    }

    @PostMapping()
    public userModel insertUser(@RequestBody userModel user) {
        return userService.insertUser(user);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") long id) {
        boolean eliminated = userService.deleteUser(id);
        if(eliminated){
            return ResponseEntity.ok().build();
        }else{
            return ResponseEntity.badRequest().build();
        }
    }
    
}
