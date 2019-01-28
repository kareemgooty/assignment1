import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { ProductService } from './products/product.service';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.components'
import { RouterModule } from '@angular/router'
import { NotFoundComponent } from './NotFoundComponent';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './products/product.module';
import { BrowserModule } from '@angular/platform-browser'
import { MusicComponent } from './music/music.component';
import { MusicService } from './music/music.service';
@NgModule({
  declarations: [
    HomeComponent,
    OrdersComponent,
    AppComponent,
    MusicComponent,
    NotFoundComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot([
        {path : 'home', component: HomeComponent},
        {path : 'products', component: ProductComponent},
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'music', component: MusicComponent },
        {path: '**', component: NotFoundComponent}
      ]
    ),
    ProductModule,
    BrowserModule 
    ],
  providers: [ProductService,MusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
