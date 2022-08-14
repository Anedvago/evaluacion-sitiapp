package com.example.demo.models;

import javax.persistence.*;

@Entity
@Table(name = "profile")
public class profileModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    /* @OneToOne(mappedBy = "profile")
    private userModel user; */

    public profileModel() {
    }

    public profileModel(long id, String name, userModel user) {
        this.id = id;
        this.name = name;
        //this.user = user;
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

   /*  public userModel getUser() {
        return user;
    } */

    /* public void setUser(userModel user) {
        this.user = user;
    } */

    @Override
    public String toString() {
        return "profileModel [id=" + id + ", name=" + name + ", user=" + "]";
    }

}
