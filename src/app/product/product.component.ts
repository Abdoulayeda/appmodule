import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  valueColor: number = 0
  products: Array<any> = [];
  constructor(private productService: ProductService) {
  //  this.products = productService.getData();
  }

   ngOnInit() {
    this.products = this.productService.getData();
  } 

  up(){
    return this.valueColor ++;
  }
}
