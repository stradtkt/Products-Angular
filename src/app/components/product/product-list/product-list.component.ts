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
  selectedProduct: Product;
  filter: Product = new Product();
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

  onSelect(product: Product) {
    this.selectedProduct = this.selectedProduct === product ? null : product;
  }

  onCreate(product: Product) {
    this.productService.createProduct(product)
      .subscribe(createP => {
        this.products = [...this.products, createP];
      });
  }

  onRemove(product: Product) {
    this.productService.removeProduct(product.id)
      .subscribe(removeProduct => {
        this.products = this.products.filter(p => p.id !== removeProduct.id);
      });
  }

  onEvent(event: Event) {
    event.stopPropagation();
  }

  // clearFilter(): void {
  //   this.filter = new Product(false);
  // }

}
