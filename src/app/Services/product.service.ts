import { Injectable } from '@angular/core';
import { Product } from '../Interfaces/product';
import { PRODUCTS } from '../mock-products';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];
  constructor(private http: HttpClient) { }
  
  getProducts(): Observable<Product[]> {
    this.http.get<Product[]>('http://localhost:3000/api/products', {observe:'response'}).subscribe(res => {
      let response = res.body;
      this.products = response;
    });
    //console.log(this.products);
    return of(this.products);
    //return of(PRODUCTS);
  }

  addProduct(product: Product): void {
    PRODUCTS.push(product);
    this.http.put<Product>('http://localhost:3000/api/products', product)
      .subscribe(response => {});
    console.log(product);
  }
}
