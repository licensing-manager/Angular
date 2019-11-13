import { Component, OnInit } from '@angular/core';
import { Customer } from '../Interfaces/customer';
import { CustomerService } from '../Services/customer.service';
import { Purchase } from '../Interfaces/purchase';
import { PurchaseService } from '../Services/purchase.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  customers: Customer[] = [];
  purchases: Purchase[] = [];

  constructor(
              private customerService: CustomerService,
              private purchaseService: PurchaseService
              ) { }

  ngOnInit() {
    this.getCustomers();
    this.getPurchases();
  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers);
  }

  getPurchases(): void {
    this.purchaseService.getPurchases()
      .subscribe(purchases => this.purchases = purchases);
  }

}
