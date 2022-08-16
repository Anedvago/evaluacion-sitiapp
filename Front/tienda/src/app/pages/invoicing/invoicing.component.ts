import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/models/client';
import { IdentificationType } from 'src/app/models/identificationType';
import { Product } from 'src/app/models/product';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { IdTypesService } from 'src/app/services/idTypes/id-types.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-invoicing',
  templateUrl: './invoicing.component.html',
  styleUrls: ['./invoicing.component.css']
})
export class InvoicingComponent implements OnInit {

  constructor(private productService: ProductService, private idTypesService: IdTypesService, private customerService: CustomerService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.idTypesService.listIdTypes().subscribe((data) => {
      this.idTypes = data
    })
  }
  client: Client
  idTypes: IdentificationType[] = []
  identificationFind: string = ""
  typeFind: number = -1

  product: Product
  ref: number = 0
  productList: Product[] = []
  amounts: number[] = []
  amount: number = 0;
  index: number = 0;
  subTotal: number = 0;

  findCustomer() {
    this.customerService.findClientByIdentificationAndType(this.identificationFind, this.typeFind).subscribe((data) => {
      this.client = data
      this.cleanFormSearch()
    })
  }

  findProduct() {
    this.productService.findProductByRef(this.ref).subscribe((data) => {
      this.product = data
      this.productList.push(this.product);
      this.amounts.push(0)
    })
  }
  setAmount() {
    this.amounts[this.index] = this.amount
    this.setSubtotal()
    this.amount = 0
  }
  setIndex(index: number) {
    this.index = index;
  }
  setSubtotal() {
    let sum = 0;
    for (let i = 0; i < this.productList.length; i++) {
      sum += this.productList[i].unitValue * this.amounts[i]
    }
    this.subTotal = sum;
  }
  removeProduct(index:number){
    this.productList.splice(index,1);
    this.amounts.splice(index,1);
  }

  /* removeClientChecked(){
    this.customerService.listClients().subscribe((data) => {
     
    }) */

  openModal(content: any) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  cleanFormSearch() {
    this.identificationFind = ""
    this.typeFind = -1
  }
}
