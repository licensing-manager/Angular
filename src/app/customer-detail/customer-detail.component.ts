import { Component, OnInit, Input, Inject } from '@angular/core';
import { Customer } from '../Interfaces/customer';

import { ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CustomerService } from "../Services/customer.service";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer

  constructor(
    private customerService: CustomerService,
    private dialogRef: MatDialogRef<CustomerDetailComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) { }

  ngOnInit() {
    this.getCustomer(this.data.companyName);
  }

  getCustomer(companyName: string): void {
    this.customerService.getCustomer(companyName)
      .subscribe(customer => this.customer = customer);
  }


  close() {
    this.dialogRef.close();
  }

}
