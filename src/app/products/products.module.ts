import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProdListComponent } from './prod-list/prod-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CheckoutformComponent } from './checkoutform/checkoutform.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { ProductOneComponent } from './product-one/product-one.component';
import { MDBmaterialModule } from 'src/mdbmaterial/mdbmaterial.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Prodlist1Component } from './prodlist1/prodlist1.component';
import { Prodone1Component } from './prodone1/prodone1.component';
import { Checkout1Component } from './checkout1/checkout1.component';
import { ShopingCart1Component } from './shoping-cart1/shoping-cart1.component';
import { MaterialModule } from 'src/material/material.module';


@NgModule({
  declarations: [
    ProdListComponent,
    ProductListComponent,
    CheckoutformComponent,
    ProductOneComponent,
    ShopingCartComponent,
    Prodlist1Component,
    Prodone1Component,
    Checkout1Component,
    ShopingCart1Component],
  imports: [
    CommonModule,
    ProductsRoutingModule,    
    MDBmaterialModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,   
    FormsModule,
    RouterModule,
  ]
})
export class ProductsModule { }
