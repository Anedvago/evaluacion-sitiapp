package com.example.demo.repositories;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.demo.models.clientModel;

@Repository
public interface clientRepository extends CrudRepository<clientModel,Long> {
    public abstract ArrayList<clientModel> findByBusinessName(String businessName);
    @Query(nativeQuery = true, value = "SELECT * FROM client WHERE identification_type  = :type AND identification = :identification")
	Optional<clientModel> findByIdentificationAndType(@Param("type")long type,@Param("identification")String identification);
}
