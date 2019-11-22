import { Component, OnInit } from '@angular/core';
import { Purchase } from '../Interfaces/purchase';
import { PurchaseService } from "../Services/purchase.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  purchases: Purchase[] = [];
  constructor(private purchaseService: PurchaseService) { }

  ngOnInit() {
    this.getPurchases();
  }

  getPurchases(): void {
    this.purchaseService.getPurchases()
      .subscribe(purchases => this.purchases = purchases.slice(1,5));
  }

}
