import { Component, OnInit } from '@angular/core';
import { Product } from '../Interfaces/product';
import { ProductService } from '../Services/product.service';


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

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true; 
  }

  SaveInfo() {
    this.productService.addProduct(this.model);
  }
}
