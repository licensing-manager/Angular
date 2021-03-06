import { Injectable } from '@angular/core';
import { Customer } from '../Interfaces/customer';
import { CUSTOMERS } from '../mock-customers';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[];
  constructor(private http: HttpClient) { }
  
  getCustomers(): Observable<Customer[]> {
    this.http.get<Customer[]>('http://localhost:3000/api/customers', {observe:'response'}).subscribe(res => {
      let response = res.body;
      this.customers = response;
    });
    return of(this.customers);
    //return of(CUSTOMERS);
  }

  getCustomer(companyName: string): Observable<Customer> {
    return of(this.customers.find(customer => customer.companyName === companyName));
  }

  addCustomer(customer: Customer): void {
    //CUSTOMERS.push(customer);
    console.log(customer);
    this.http.put<Customer>('http://localhost:3000/api/customers', customer)
      .subscribe(response => {});
  }
}
