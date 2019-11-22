import { Injectable } from '@angular/core';
import { Product } from '../Interfaces/product';
import { PRODUCTS } from '../mock-products';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  
  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  addProduct(product: Product): void {
    PRODUCTS.push(product);
    this.http.put('http://localhost:3000/product', product);
  }
}
