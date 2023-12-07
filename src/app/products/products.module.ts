import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ProductsRoutingModule } from './products-routing.module';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';

import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sortBy.pipe';
import { ToogleCasePipe } from './pipes/toogle-case.pipe';
import { ShowColorPipe } from './pipes/show-color.pipe';


@NgModule({
  declarations: [
    BasicPageComponent,
    NumberPageComponent,
    UncommonPageComponent,
    OrderComponent,
    CanFlyPipe,
    ShowColorPipe,
    SortByPipe,
    ToogleCasePipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
