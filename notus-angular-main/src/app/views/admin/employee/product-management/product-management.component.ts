import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';  // Assume we have a service for handling API requests

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  addProduct(product: any) {
    this.productService.addProduct(product).subscribe(() => {
      this.getProducts();
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.getProducts();
    });
  }
}
