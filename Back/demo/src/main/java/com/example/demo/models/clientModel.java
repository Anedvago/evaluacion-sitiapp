package com.example.demo.models;

import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name="client")
public class clientModel {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long client;
	
	@ManyToOne
	@JoinColumn(name="identification_type")
	private identificationTypeModel identificationType;
	
	@Column(name="identification")
	private String identification;
	
	@Column(name="business_name")
	private String businessName;
	
	@Column(name="registration_date")
	private Date registrationDate;
	
	@Column(name="state")
	private String state;


    public clientModel() {
    }

    public clientModel(long client, identificationTypeModel identificationType, String identification,
            String businessName, Date registrationDate, String state) {
        this.client = client;
        this.identificationType = identificationType;
        this.identification = identification;
        this.businessName = businessName;
        this.registrationDate = registrationDate;
        this.state = state;
    }

    public long getClient() {
        return client;
    }

    public void setClient(long client) {
        this.client = client;
    }

    public identificationTypeModel getIdentificationType() {
        return identificationType;
    }

    public void setIdentificationType(identificationTypeModel identificationType) {
        this.identificationType = identificationType;
    }

    public String getIdentification() {
        return identification;
    }

    public void setIdentification(String identification) {
        this.identification = identification;
    }

    public String getBusinessName() {
        return businessName;
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }

    public Date getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(Date registrationDate) {
        this.registrationDate = registrationDate;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    @Override
    public String toString() {
        return "clientModel [businessName=" + businessName + ", client=" + client + ", identification=" + identification
                + ", identificationType=" + identificationType + ", registrationDate=" + registrationDate + ", state="
                + state + "]";
    }

    

}
