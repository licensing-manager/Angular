import { Component, OnInit } from '@angular/core';
import { Purchase } from '../Interfaces/purchase';
import { PurchaseService } from "../Services/purchase.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PurchaseDetailComponent } from '../purchase-detail/purchase-detail.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  purchases: Purchase[] = [];
  constructor(
              private purchaseService: PurchaseService,
              public dialog: MatDialog
              ) { }

  ngOnInit() {
    this.getPurchases();
  }

  getPurchases(): void {
    this.purchaseService.getPurchasesExpiringSoon()
      .subscribe(purchases => this.purchases = purchases);
  }

  openPurchaseDetail(purchase: Purchase) {
    const dialogRef = this.dialog.open(PurchaseDetailComponent, {
      width: '640px',
      data: {
        companyName: purchase.customer_name,
        productName: purchase.product,
        no_of_licenses: purchase.no_of_licenses,
        expiration_date: purchase.expiration_date
      }
    });
  }
}
