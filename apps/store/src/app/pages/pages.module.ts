import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [HomeComponent, ProductsComponent, OrdersComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
