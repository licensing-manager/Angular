import { Injectable } from '@angular/core';
import { Customer } from '../Interfaces/customer';
import { CUSTOMERS } from '../mock-customers';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  
  getCustomers(): Observable<Customer[]> {
    return of(CUSTOMERS);
  }

  getCustomer(id: number): Observable<Customer> {
    return of(CUSTOMERS.find(customer => customer.id === id));
  }

  addCustomer(customer: Customer): void {
    CUSTOMERS.push(customer);
    this.http.put<Customer>('http://localhost:3000/api/customers', customer)
      .subscribe(response => {});
  }
}
