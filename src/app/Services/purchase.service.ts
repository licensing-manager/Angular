import { Injectable } from '@angular/core';
import { Purchase } from '../Interfaces/purchase';
import { PURCHASES } from '../mock-purchases';
import { Observable, of, fromEventPattern } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  purchases: Purchase[];
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
}
