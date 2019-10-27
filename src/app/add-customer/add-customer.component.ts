import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  model = new Customer(999,
        "Enter Customer Name",
        "Enter Product Name",
        1,
        [1012914423],
        "01/01/2020");

  submitted = false;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  SaveInfo() {
    this.customerService.addCustomer(this.model);
  }

}
