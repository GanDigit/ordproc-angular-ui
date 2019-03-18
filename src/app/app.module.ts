import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product-app/product/product.component';
import { ProductAddComponent } from './product-app/product-add/product-add.component';
import { ProductDetailComponent } from './product-app/product-detail/product-detail.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductEditComponent } from './product-app/product-edit/product-edit.component';
import { OrderComponent } from './order-app/order/order.component';
import { OrderAddComponent } from './order-app/order-add/order-add.component';
import { OrderDetailComponent } from './order-app/order-detail/order-detail.component';
import { OrderEditComponent } from './order-app/order-edit/order-edit.component';

const appRoutes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
    data: { title: 'Product List' }
  },
  {
    path: 'product-details/:id',
    component: ProductDetailComponent,
    data: { title: 'Product Details' }
  },
  {
    path: 'product-add',
    component: ProductAddComponent,
    data: { title: 'Product Add' }
  },
  {
    path: 'product-edit/:id',
    component: ProductEditComponent,
    data: { title: 'Product Edit' }
  },
  { path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: 'orders',
    component: OrderComponent,
    data: { title: 'Order List' }
  },
  {
    path: 'order-details/:id',
    component: OrderDetailComponent,
    data: { title: 'Order Details' }
  },
  {
    path: 'order-add',
    component: OrderAddComponent,
    data: { title: 'Order Add' }
  },
  {
    path: 'order-edit/:id',
    component: OrderEditComponent,
    data: { title: 'Order Edit' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductEditComponent,
    OrderComponent,
    OrderAddComponent,
    OrderDetailComponent,
    OrderEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
