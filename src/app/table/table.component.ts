import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from '../Interfaces/customer';
import { CustomerService } from '../Services/customer.service';
import { Purchase } from '../Interfaces/purchase';
import { PurchaseService } from '../Services/purchase.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {
  customers: Customer[] = [];
  purchases: Purchase[] = [];

  dataSource = new MatTableDataSource<Purchase>();

  displayedColumns = [];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  

  constructor(
              private customerService: CustomerService,
              private purchaseService: PurchaseService
              ) { }

  ngOnInit() {
    this.getCustomers();
    this.getPurchases();
    this.dataSource.data = this.purchases;
    this.displayedColumns = ['customer_name', 'product', 'no_of_licenses', 'expiration_date'];
    this.dataSource.paginator = this.paginator;
  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers);
  }

  getPurchases(): void {
    this.purchaseService.getPurchases()
      .subscribe(purchases => this.purchases = purchases);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
