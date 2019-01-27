import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { FormsModule } from '@angular/forms';
import { CustomePipe } from './custom.pipe';
import { DiscountPipe } from './discount.pipe';
import { DetailComponent } from './details/detail.component';
import { ProductFilterPipe } from './productfilter.pipe';
import { StarRatingComponent } from './starrating/starrating.component';
import { ProductService } from './products/product.service';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.components'
import { RouterModule } from '@angular/router'
import { NotFoundComponent } from './NotFoundComponent';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    OrdersComponent,
    AppComponent,
    ProductComponent,
    DetailComponent,
    StarRatingComponent,
    CustomePipe,
    DiscountPipe,
    ProductFilterPipe,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
        {path : 'home', component: HomeComponent},
        {path : 'products', component: ProductComponent},
        {path : 'detail/:id', component: DetailComponent},
        {path : 'orders', component: OrdersComponent},
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: '**', component: NotFoundComponent}
      ]
    )
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
