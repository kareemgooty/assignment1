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

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DetailComponent,
    StarRatingComponent,
    CustomePipe,
    DiscountPipe,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
