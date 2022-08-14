package com.example.demo.models;

import javax.persistence.*;
@Entity
@Table(name="identification_type")
public class identificationTypeModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long identificationType;

    @Column(name = "abbreviation")
    private String abbreviation;

    @Column(name = "description")
    private String description;

    

    public identificationTypeModel() {
    }

    public identificationTypeModel(long identification_type, String abbreviation, String description) {
        this.identificationType = identification_type;
        this.abbreviation = abbreviation;
        this.description = description;
    }

    public long getIdentificationType() {
        return identificationType;
    }

    public void setIdentificationType(long identification_type) {
        this.identificationType = identification_type;
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
                + ", identification_type=" + identificationType + "]";
    }

    
}
