export class Product {

    id: number;
    name: string;
    state: string;
    unitValue: number;
    img: string

    constructor(id: number,
        name: string,
        state: string,
        unitValue: number,
        img: string) {
        this.id = id
        this.name = name
        this.state = state
        this.unitValue = unitValue
        this.img = img

    }
}