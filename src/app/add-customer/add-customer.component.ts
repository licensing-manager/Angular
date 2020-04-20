import { Component, OnInit } from '@angular/core';
import { Customer } from '../Interfaces/customer';
import { CustomerService } from '../Services/customer.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  model: Customer = {
    companyName: "",
    address: "",
    contacts: []
  };

  contactForm = new FormGroup({
    role: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone_number: new FormControl('', [Validators.required, Validators.pattern(new RegExp("[0-9]{10}"))])
  });

  submitted = false;
  contactAdded = false;

  constructor(private customerService: CustomerService,
              public dialog: MatDialog
              ) { }

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

  addContact() {
    this.contactAdded = true;
    this.model.contacts.push(this.contactForm.value);
    this.contactForm.reset();
  }

  closeDialog():void {
    this.SaveInfo();
    this.dialog.closeAll();
  }
}
