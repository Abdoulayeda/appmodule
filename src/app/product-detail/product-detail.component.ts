import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { switchMap } from 'rxjs/operators';
import { Product } from '../product/product';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  id: number = 0;
  product: Product ={id:0,name: '', price: 0} 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    ){ }

  ngOnInit(){
      this.id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    
      this.product = this.productService.getProductDetail(this.id)!;
  } 
}
