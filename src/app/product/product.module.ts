import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { FirstLetterPipe } from './first-letter.pipe';
import { ProductService } from '../services/product.service';
import { ProductsRoutingModule } from './product-routing.module';


@NgModule({
  imports: [
    CommonModule, ProductsRoutingModule
  ],
  declarations: [
    ProductComponent,
    FirstLetterPipe,
  ],
  exports: [ProductComponent],
  providers: [ProductService]
})
export class ProductModule { }
