import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer-manager',
  templateUrl: './customer-manager.component.html',
  styleUrls: ['./customer-manager.component.css']
})
export class CustomerManagerComponent implements OnInit {

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.listClients().subscribe((data)=>{
      console.log(data);
      
    })
  }

}
