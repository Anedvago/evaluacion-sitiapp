import { Client } from "./client";

export class Invoice {

    consecutive: number;
    client: Client;
    date: Date;

    constructor(consecutive: number,
        client: Client,
        date: Date) {
        this.consecutive = consecutive;
        this.client = client;
        this.date = date;

    }
}
//3176722398