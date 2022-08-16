import { Invoice } from "./invoice";
import { Product } from "./product";

export class DetailInvoice {

    id: number;
    consecutive: Invoice;
    productId: Product;
    amount: number;
    unitValue: number;

    constructor(id: number,
        consecutive: Invoice,
        productId: Product,
        amount: number,
        unitValue: number) {
        this.id = id;
        this.consecutive = consecutive;
        this.productId = productId;
        this.amount = amount;
        this.unitValue = unitValue;

    }
}