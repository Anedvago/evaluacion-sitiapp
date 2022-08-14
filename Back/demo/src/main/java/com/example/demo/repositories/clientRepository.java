package com.example.demo.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.models.clientModel;

@Repository
public interface clientRepository extends CrudRepository<clientModel,Long> {
    public abstract clientModel findByIdentification(String identification);
    public abstract ArrayList<clientModel> findByBusinessName(String businessName);
}
