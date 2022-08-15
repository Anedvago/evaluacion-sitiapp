import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { IdTypesService } from 'src/app/services/idTypes/id-types.service';

@Component({
  selector: 'app-customer-manager',
  templateUrl: './customer-manager.component.html',
  styleUrls: ['./customer-manager.component.css']
})
export class CustomerManagerComponent implements OnInit {

  constructor(private idTypesService: IdTypesService, private customerService: CustomerService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.customerService.listClients().subscribe((data) => {

      this.clients = data;

    })
    this.idTypesService.listIdTypes().subscribe((data) => {

      this.idTypes = data
    })
  }

  clients: any[] = []
  idTypes: any[] = []

  typeModal: string = "create"

  idType = "-1"
  identification = ""
  businessName = ""
  state = "active"

  cleanForm() {
    this.idType = "-1"
    this.identification = ""
    this.businessName = ""
    this.state = "active"
  }

  insertClient() {
    this.customerService.insertClient(parseInt(this.idType), this.identification, this.businessName, this.state).subscribe((data) => {
      this.customerService.listClients().subscribe((data) => {
        this.clients = data;
        this.cleanForm();
      })
    });
  }
  updateClient() {
    this.customerService.insertClient(parseInt(this.idType), this.identification, this.businessName, this.state).subscribe((data) => {
      this.customerService.listClients().subscribe((data) => {
        this.clients = data;
        this.cleanForm();
      })
    });
  }

  openModal(content: any) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }


  selectCustomer(identification:string,type:number){
    console.log(identification +" "+ type);
    
    this.customerService.findClientByIdentificationAndType(identification,type).subscribe((data)=>{
      console.log(data);
      
    })
  }

}
