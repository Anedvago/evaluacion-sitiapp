import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/models/client';
import { IdentificationType } from 'src/app/models/identificationType';
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
    this.profile = localStorage.getItem("profile")!;
  }

  clients: Client[] = []
  idTypes: IdentificationType[] = []

  typeModal: string = "create"

  idType = -1
  identification = ""
  businessName = ""
  state = "active"
  id: number = -1

  identificationFind = ""
  typeFind = -1

  client:Client

  profile = ""

  cleanForm() {
    this.idType = -1
    this.identification = ""
    this.businessName = ""
    this.state = "active"
  }
  cleanFormSearch() {
    this.identificationFind = ""
    this.typeFind = -1
  }

  insertClient() {
    this.customerService.insertClient(this.idType, this.identification, this.businessName, this.state).subscribe((data) => {
      this.customerService.listClients().subscribe((data) => {
        this.clients = data;
        this.cleanForm();
      })
    });
  }
  updateClient() {
    this.customerService.updateClient(this.id, this.idType, this.identification, this.businessName, this.state).subscribe((data) => {
      this.customerService.listClients().subscribe((data) => {
        this.clients = data;
        this.cleanForm();
      })
    });
  }

  openModal(content: any) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  findCustomer() {
    this.customerService.findClientByIdentificationAndType(this.identificationFind, this.typeFind).subscribe((data) => {
      this.clients = [data]
    })
  }
  deleteFilters(){
    this.customerService.listClients().subscribe((data) => {
      this.clients = data;
      this.cleanFormSearch()
    })
  }


  selectCustomer(identification: string, type: number) {
    this.customerService.findClientByIdentificationAndType(identification, type).subscribe((data) => {
      this.client = data;
      this.setClient(this.client);
    })
  }

  setClient(client:Client) {
    this.id = client.client
    this.idType = client.identificationType.identificationType
    this.identification = client.identification
    this.businessName = client.businessName
    this.state = client.state
  }

  setTypeModal(typeModal: string) {
    this.typeModal = typeModal;
    if (typeModal == "create") {
      this.cleanForm();
    }
  }

  deleteClient() {

    this.customerService.deleteClient(this.id).subscribe(() => {
      this.customerService.listClients().subscribe((data) => {
        this.clients = data;
        this.cleanForm();
      })
    });


  }
}
