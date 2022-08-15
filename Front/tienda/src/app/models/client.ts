import { IdentificationType } from "./identificationType";

export class Client {
    client: number;
    identificationType: IdentificationType;
    identification: string;
    businessName: string; registrationDate: Date;
    state: string;

    constructor(client: number,
        identificationTypeModel: any,
        identification: string,
        businessName: string, registrationDate: Date,
        state: string) {
        this.client = client;
        this.identificationType = identificationTypeModel;
        this.identification = identification;
        this.businessName = businessName;
        this.registrationDate = registrationDate;
        this.state = state;

    }
}