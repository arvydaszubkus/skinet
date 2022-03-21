import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SharedModule } from '../shared/shared.module';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RouterModule } from '@angular/router';
import { ShopRountingModule } from './shop-rounting.module';



@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    ProductdetailsComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    SharedModule,
    ShopRountingModule
  ],
  exports: [
    PaginationModule
  ]
})
export class ShopModule { }
