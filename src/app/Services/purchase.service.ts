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
    return of(PURCHASES.find(purchase => purchase.id === id));
  }

  addPurchase(purchase: Purchase): void {
    PURCHASES.push(purchase);
    this.http.put('http://localhost:3000/purchase', purchase);
  }
}
