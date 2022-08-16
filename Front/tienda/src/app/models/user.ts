import { Profile } from "./profile";

export class User {

    id: number;
    name: string;
    surname: string;
    user: string;
    password: string;
    profile: Profile;


    constructor(
        id: number,
        name: string,
        surname: string,
        user: string,
        password: string,
        profile: Profile) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.user = user;
        this.password = password;
        this.profile = profile;

    }
}