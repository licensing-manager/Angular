import { Injectable } from '@angular/core';
import { Purchase } from '../Interfaces/purchase';
import { PURCHASES } from '../mock-purchases';
import { Observable, of, fromEventPattern } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  purchases: Purchase[] = [];
  purchasesExpiringSoon: Purchase[] = [];
  constructor(private http: HttpClient) { }
  
  getPurchases(): Observable<Purchase[]> {
    this.http.get<Purchase[]>('http://localhost:3000/api/purchases', {observe:'response'}).subscribe(res => {
      let response = res.body;
      this.purchases = response;
    });
    //console.log(this.purchases)
    return of(this.purchases);
    //return of(PURCHASES);
  }

  getPurchase(id: number): Observable<Purchase> {
    return of(PURCHASES.find(purchase => purchase.purchaseId === id));
  }

  addPurchase(purchase: Purchase): void {
    purchase.licenseKeyType = "type1";
    purchase.licenses = [];
    console.log(purchase);
    //PURCHASES.push(purchase);
    this.http.put<Purchase>('http://localhost:3000/api/purchases', purchase)
      .subscribe(response => {});
  }
  getPurchasesExpiringSoon() : Observable<Purchase[]> {
    if (this.purchases.length == 0) {
      this.getPurchases();
    }
    
    this.purchasesExpiringSoon = [];

    var today = new Date();
    var todayString = today.toISOString();
    var todayString = todayString.slice(0, 4) + todayString.slice(5, 7) + todayString.slice(8, 10);

    for (var purchase of this.purchases) {
      var reformattedDate = purchase.expiration_date.slice(6) + purchase.expiration_date.slice(0, 2)
                            + purchase.expiration_date.slice(3, 5);
      
      if (Number(reformattedDate) + 30 >= Number(todayString)) {
        this.purchasesExpiringSoon.push(purchase);
      }
    }

    function sorter(a, b) {
      var x = Number(a.expiration_date.slice(6) + a.expiration_date.slice(0, 2)
                      + a.expiration_date.slice(3, 5));
      var y = Number(b.expiration_date.slice(6) + b.expiration_date.slice(0, 2)
                      + b.expiration_date.slice(3, 5));
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    }

    return of(this.purchasesExpiringSoon.sort(sorter));
  }
}
