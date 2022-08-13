package com.example.demo.models;

import javax.persistence.*;
@Entity
@Table(name="identification_type")
public class identificationTypeModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long identification_type;

    @Column(name = "abbreviation")
    private String abbreviation;

    @Column(name = "description")
    private String description;

    public identificationTypeModel(long identification_type, String abbreviation, String description) {
        this.identification_type = identification_type;
        this.abbreviation = abbreviation;
        this.description = description;
    }

    public long getIdentification_type() {
        return identification_type;
    }

    public void setIdentification_type(long identification_type) {
        this.identification_type = identification_type;
    }

    public String getAbbreviation() {
        return abbreviation;
    }

    public void setAbbreviation(String abbreviation) {
        this.abbreviation = abbreviation;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "identificationTypesModel [abbreviation=" + abbreviation + ", description=" + description
                + ", identification_type=" + identification_type + "]";
    }

    
}
