import { Injectable } from '@angular/core';
import { Purchase } from '../Interfaces/purchase';
import { PURCHASES } from '../mock-purchases';
import { Observable, of, fromEventPattern } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http: HttpClient) { }
  
  getPurchases(): Observable<Purchase[]> {
    return of(PURCHASES);
  }

  getPurchase(id: number): Observable<Purchase> {
    return of(PURCHASES.find(purchase => purchase.purchaseId === id));
  }

  addPurchase(purchase: Purchase): void {
    purchase.licenseKeyType = "type1";
    purchase.licenses = [];
    PURCHASES.push(purchase);
    this.http.post<Purchase>('http://localhost:3000/api/purchases', purchase)
      .subscribe(response => {});
  }
}
