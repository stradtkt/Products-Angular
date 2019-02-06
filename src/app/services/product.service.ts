import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product = new Product();
  products: Product[];
  constructor(private http: HttpClient) { }
  private readonly BASE_URL = 'https://5bd49f4e9325280013d2883f.mockapi.io/products/';

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.BASE_URL);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.BASE_URL + id);
  }

  createProduct(product: Product) {
    return this.http.post<Product>(this.BASE_URL, product);
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(this.BASE_URL + id, product);
  }

  removeProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(this.BASE_URL + id);
  }
}
