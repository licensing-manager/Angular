import { Component, OnInit } from '@angular/core';
import { Customer } from '../Interfaces/customer';
import { CustomerService } from '../Services/customer.service';
import { Purchase } from '../Interfaces/purchase';
import { PurchaseService } from '../Services/purchase.service';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  customers: Customer[] = [];
  purchases: Purchase[] = [];

  displayColumns: String[] = ['customer_name', 'product', 'no_of_licenses', 'expiration_date'];
  dataSource: MatTableDataSource<Purchase>;

  constructor(
              private customerService: CustomerService,
              private purchaseService: PurchaseService
              ) { }

  ngOnInit() {
    this.getCustomers();
    this.getPurchases();
    this.dataSource = new MatTableDataSource(this.purchases);
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
