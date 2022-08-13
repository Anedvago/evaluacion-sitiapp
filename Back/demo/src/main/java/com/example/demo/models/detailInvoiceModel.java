package com.example.demo.models;

import javax.persistence.*;

@Entity
@Table(name = "detail_invoice")
public class detailInvoiceModel {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@ManyToOne
	@JoinColumn(name = "consecutive")
	private invoiceModel consecutive;
	
	@ManyToOne()
	@JoinColumn(name = "product_id")
	private productModel productId;
	
	@Column(name = "amount")
	private long amount;
	
	@Column(name = "unit_value")
	private long unitValue;

    public detailInvoiceModel(long id, invoiceModel consecutive, productModel productId, long amount, long unitValue) {
        this.id = id;
        this.consecutive = consecutive;
        this.productId = productId;
        this.amount = amount;
        this.unitValue = unitValue;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public invoiceModel getConsecutive() {
        return consecutive;
    }

    public void setConsecutive(invoiceModel consecutive) {
        this.consecutive = consecutive;
    }

    public productModel getProductId() {
        return productId;
    }

    public void setProductId(productModel productId) {
        this.productId = productId;
    }

    public long getAmount() {
        return amount;
    }

    public void setAmount(long amount) {
        this.amount = amount;
    }

    public long getUnitValue() {
        return unitValue;
    }

    public void setUnitValue(long unitValue) {
        this.unitValue = unitValue;
    }

    @Override
    public String toString() {
        return "detailInvoiceModel [amount=" + amount + ", consecutive=" + consecutive + ", id=" + id + ", productId="
                + productId + ", unitValue=" + unitValue + "]";
    }
    
    
}
