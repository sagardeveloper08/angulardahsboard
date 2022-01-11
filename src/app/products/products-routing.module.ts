import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Checkout1Component } from './checkout1/checkout1.component';
import { CheckoutformComponent } from './checkoutform/checkoutform.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { Prodlist1Component } from './prodlist1/prodlist1.component';
import { Prodone1Component } from './prodone1/prodone1.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductOneComponent } from './product-one/product-one.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { ShopingCart1Component } from './shoping-cart1/shoping-cart1.component';

const routes: Routes = [
  { 
    path: '', component:ProdListComponent ,
    children:[
       { path: 'productlist', component: ProductListComponent },
       { path: 'productone', component: ProductOneComponent },   
       { path: 'checkout', component: CheckoutformComponent },
       { path: 'shoping-cart', component: ShopingCartComponent }, 
       
       { path: 'productlist1', component: Prodlist1Component },
       { path: 'productone1', component: Prodone1Component }, 
       { path: 'checkout1', component: Checkout1Component },
       { path: 'shoping-cart1', component: ShopingCart1Component },
     ]
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
