import { Component, OnInit } from '@angular/core';
import { Customer } from '../Interfaces/customer';
import { CustomerService } from '../Services/customer.service';
import { Purchase } from '../Interfaces/purchase';
import { PurchaseService } from '../Services/purchase.service';
import { Product } from '../Interfaces/product';
import { ProductService } from '../Services/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css']
})
export class AddPurchaseComponent implements OnInit {

  customers: Customer[];
  products: Product[];

  model: Purchase = {
    purchaseId: null,
    customer_name: "",
    product: "",
    no_of_licenses: null,
    expiration_date: "",
    licenses: [],
    licenseKeyType: ""
  };
  
  submitted = false;

  selections = null;

  constructor(
    private customerService: CustomerService,
    private purchaseService: PurchaseService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getCustomers();
    this.getProducts();
    this.selections = new FormGroup({
      customerEntry: new FormControl(this.customers[0].companyName),
      productEntry: new FormControl(this.products[0].name)
    });
  }

  onSubmit() {
    this.model.customer_name = this.selections.value.customerEntry;
    this.model.product = this.selections.value.productEntry;
    this.submitted = true;
  }

  getCustomers() {
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers);
  }

  getProducts() {
    this.productService.getProducts()
    .subscribe(products => this.products = products);
  }

  SaveInfo() {
    this.purchaseService.addPurchase(this.model);
  }

}
