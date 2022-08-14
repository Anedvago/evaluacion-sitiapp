package com.example.demo.models;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class userModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    @Column(name = "user")
    private String user;

    @Column(name = "password")
    private String password;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "profile_id")
    private profileModel profile;

    public userModel() {
    }

    public userModel(long id, String name, String surname, String user, String password, profileModel profile) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.user = user;
        this.password = password;
        this.profile = profile;
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

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public profileModel getProfile() {
        return profile;
    }

    public void setProfile(profileModel profile) {
        this.profile = profile;
    }

    @Override
    public String toString() {
        return "userModel [id=" + id + ", name=" + name + ", password=" + password + ", profile=" + profile
                + ", surname=" + surname + ", user=" + user + "]";
    }

}
