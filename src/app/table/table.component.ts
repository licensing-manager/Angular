import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from '../Interfaces/customer';
import { CustomerService } from '../Services/customer.service';
import { Purchase } from '../Interfaces/purchase';
import { PurchaseService } from '../Services/purchase.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { AddPurchaseComponent } from '../add-purchase/add-purchase.component';
import { Router, NavigationEnd } from "@angular/router";
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {
  customers: Customer[] = [];
  purchases: Purchase[] = [];

  dataSource = new MatTableDataSource<Purchase>();

  mySubscription: any;

  displayedColumns = [];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  

  constructor(
              private customerService: CustomerService,
              private purchaseService: PurchaseService,
              public dialog: MatDialog,
              private router: Router
              ) { 
                this.router.routeReuseStrategy.shouldReuseRoute = function () {
                  return false;
                };
              
                this.mySubscription = this.router.events.subscribe((event) => {
                  if (event instanceof NavigationEnd) {
                    // Trick the Router into believing it's last link wasn't previously loaded
                    this.router.navigated = false;
                 }
                });
              }

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

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  openCustomerEntry() {
    const dialogRef = this.dialog.open(AddCustomerComponent, {
      width: '640px'
    });
    dialogRef.beforeClosed().subscribe(() => {
      this.router.navigate(['/table']);
    });
  }
  
  openProductEntry() {
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '640px'
    });
    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['/table']);
    });
  }

  openPurchaseEntry() {
    const dialogRef = this.dialog.open(AddPurchaseComponent, {
      width: '640px'
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }
  openCustomerInfo(purchase: Purchase) {
    const dialogRef = this.dialog.open(CustomerDetailComponent, {
      width: '640px',
      data: {companyName: purchase.customer_name}
    });
  }
}
