package com.example.demo.models;

import javax.persistence.*;

@Entity
@Table(name = "product")
public class productModel {
    @Id
	private long id;
	
	@Column(name="name")
	private String name;
	
	@Column(name = "state")
	private String state;
	
	@Column(name="unit_value")
	private long unitValue;

    public productModel(long id, String name, String state, long unitValue) {
        this.id = id;
        this.name = name;
        this.state = state;
        this.unitValue = unitValue;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public long getUnitValue() {
        return unitValue;
    }

    public void setUnitValue(long unitValue) {
        this.unitValue = unitValue;
    }

    @Override
    public String toString() {
        return "productModel [id=" + id + ", name=" + name + ", state=" + state + ", unitValue=" + unitValue + "]";
    }

    
}
