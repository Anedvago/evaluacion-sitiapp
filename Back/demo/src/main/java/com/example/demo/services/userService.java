package com.example.demo.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.userModel;
import com.example.demo.repositories.userRepository;

@Service
public class userService {
    @Autowired
    userRepository userRepository;

    public ArrayList<userModel> listUsers() {
        return (ArrayList<userModel>) userRepository.findAll();
    }

    public userModel insertUser(userModel user) {
        return userRepository.save(user);
    }

    public boolean deleteUser(long id) {
        try {
            userRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public Optional<userModel> findUserById(Long id) {
        return userRepository.findById(id);
    }

    public ArrayList<userModel> findUserByUsername(String username) {
        return (ArrayList<userModel>) userRepository.findByUser(username);
    }
}
