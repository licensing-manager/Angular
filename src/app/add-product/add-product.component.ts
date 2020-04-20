import { Component, OnInit } from '@angular/core';
import { Product } from '../Interfaces/product';
import { ProductService } from '../Services/product.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  model: Product = {
    name: '',
    description: ''
  }

  submitted = false;

  constructor(
              private productService: ProductService,
              public dialog: MatDialog
              ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true; 
  }

  SaveInfo() {
    this.productService.addProduct(this.model);
  }

  openDialog(): void {
  }

  closeDialog():void {
    this.SaveInfo();
    this.dialog.closeAll();
  }
}
