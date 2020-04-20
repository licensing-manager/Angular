import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CustomerService } from "../Services/customer.service";
import { Customer } from '../Interfaces/customer';

@Component({
  selector: 'app-purchase-detail',
  templateUrl: './purchase-detail.component.html',
  styleUrls: ['./purchase-detail.component.css']
})
export class PurchaseDetailComponent implements OnInit {
  customer: Customer;
  constructor(
              private customerService: CustomerService,
              private dialogRef: MatDialogRef<PurchaseDetailComponent>,
              @Inject(MAT_DIALOG_DATA) private data
            ) { }

  ngOnInit() {
    this.getCustomer(this.data.companyName);
    console.log(this.customer);
    console.log(this.data);
  }

  openDialog() {
    
  }

  getCustomer(companyName: string): void {
    this.customerService.getCustomer(companyName)
      .subscribe(customer => this.customer = customer);
  }



  close() {
    this.dialogRef.close();
  }

}
