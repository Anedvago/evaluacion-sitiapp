import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/models/client';
import { IdentificationType } from 'src/app/models/identificationType';
import { Invoice } from 'src/app/models/invoice';
import { Product } from 'src/app/models/product';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { DetailInvoiceService } from 'src/app/services/detail-invoice/detail-invoice.service';
import { IdTypesService } from 'src/app/services/idTypes/id-types.service';
import { InvoiceService } from 'src/app/services/invoice/invoice.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-invoicing',
  templateUrl: './invoicing.component.html',
  styleUrls: ['./invoicing.component.css'],
})
export class InvoicingComponent implements OnInit {
  constructor(
    private detaiInvoiceService: DetailInvoiceService,
    private invoiceService: InvoiceService,
    private productService: ProductService,
    private idTypesService: IdTypesService,
    private customerService: CustomerService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.idTypesService.listIdTypes().subscribe((data) => {
      this.idTypes = data;
    });
  }
  client: Client;
  idTypes: IdentificationType[] = [];
  identificationFind: string = '';
  typeFind: number = -1;

  product: Product;
  ref: number = 0;
  productList: Product[] = [];
  amounts: number[] = [];
  amount: number = 0;
  index: number = 0;
  subTotal: number = 0;

  invoice: Invoice;

  findCustomer() {
    if (this.identificationFind != '' && this.typeFind != -1) {
      this.customerService
        .findClientByIdentificationAndType(
          this.identificationFind,
          this.typeFind
        )
        .subscribe((data) => {
          if (data != undefined) {
            this.client = data;
            this.cleanFormSearch();
          } else {
            alert('El cliente no se encontro');
          }
        });
    } else {
      alert('Ingrese datos para buscar el cliente');
    }
  }

  findProduct(content: any) {
    if (this.ref != 0) {
      this.productService.findProductByRef(this.ref).subscribe((data) => {
        if (data != undefined) {
          this.product = data;
          this.productList.push(this.product);
          this.amounts.push(0);
          this.ref = 0;
          this.openModal(content);
        } else {
          alert('No se encontro el producto');
        }
      });
    } else {
      alert('Ingrese la referencia del producto a buscar');
    }
  }
  setAmount() {
    this.amounts[this.index] = this.amount;
    this.setSubtotal();
    this.amount = 0;
  }
  setIndex(index: number) {
    this.index = index;
  }
  setSubtotal() {
    let sum = 0;
    for (let i = 0; i < this.productList.length; i++) {
      sum += this.productList[i].unitValue * this.amounts[i];
    }
    this.subTotal = sum;
  }
  removeProduct(index: number) {
    this.productList.splice(index, 1);
    this.amounts.splice(index, 1);
    this.setSubtotal();
  }

  openModal(content: any) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  cleanFormSearch() {
    this.identificationFind = '';
    this.typeFind = -1;
  }

  insertInvoice() {
    if (this.client != undefined && this.productList.length > 0) {
      this.invoiceService.insertInvoice(this.client).subscribe((data) => {
        this.invoice = data;
        for (let i = 0; i < this.productList.length; i++) {
          this.detaiInvoiceService
            .insertDetailInvoice(
              this.invoice.consecutive,
              this.productList[i].id,
              this.amounts[i],
              this.productList[i].unitValue
            )
            .subscribe((data) => {
              this.productList = [];
              this.amounts = [];
              this.setSubtotal();
            });
        }
      });
    } else {
      alert('Seleccione el cliente y los productos de la factura');
    }
  }
}
