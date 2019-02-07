import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from './../../../models/Product';
import { ProductService } from './../../../services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  @Output() createP = new EventEmitter<Product>();
  product = new Product();
  selectedProduct: Product;
  constructor(
    private readonly productService: ProductService,
    private readonly router: Router,
  ) { }

  ngOnInit() {
  }
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    this.productService.createProduct(this.product)
      .subscribe(product => {
        this.product = new Product();
        form.reset();
        this.router.navigateByUrl('/');
      })
  }
}
