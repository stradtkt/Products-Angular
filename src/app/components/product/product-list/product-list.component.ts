import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product = new Product();
  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

  onRemove(product: Product) {
    this.productService.removeProduct(product.id)
      .subscribe(removeProduct => {
        this.products = this.products.filter(p => p.id !== removeProduct.id);
      });
  }

}
