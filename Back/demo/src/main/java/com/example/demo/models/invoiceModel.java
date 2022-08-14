package com.example.demo.models;

import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name="invoice")
public class invoiceModel {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long consecutive;

	@ManyToOne
	@JoinColumn(name = "client")
	private clientModel client;

	@Column(name = "date")
	private Date date;

    

    public invoiceModel() {
    }

    public invoiceModel(long consecutive, clientModel client, Date date) {
        this.consecutive = consecutive;
        this.client = client;
        this.date = date;
    }

    public long getConsecutive() {
        return consecutive;
    }

    public void setConsecutive(long consecutive) {
        this.consecutive = consecutive;
    }

    public clientModel getClient() {
        return client;
    }

    public void setClient(clientModel client) {
        this.client = client;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "invoiceModel [client=" + client + ", consecutive=" + consecutive + ", date=" + date + "]";
    }

    
}
