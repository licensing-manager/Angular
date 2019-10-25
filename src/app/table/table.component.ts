import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from "../customer.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  customers: Customer[] = [];
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers.slice(1,5));
  }

}
