export class IdentificationType {
    identificationType: number;
    abbreviation: string;
    description: string;

    constructor(identificationType: number,
        abbreviation: string,
        description: string) {
        this.identificationType = identificationType
        this.abbreviation = abbreviation
        this.description = description
    }
}