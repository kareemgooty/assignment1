import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { DetailComponent } from '../details/detail.component';
import { OrdersComponent } from '../orders/orders.components';
import { StarRatingComponent } from '../starrating/starrating.component';
import { ProductComponent } from './product.component';
import { CustomePipe } from '../custom.pipe';
import { DiscountPipe } from '../discount.pipe';
import { ProductFilterPipe } from '../productfilter.pipe';
import { ProductRouterGaurd } from './product.routergaurd';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
    StarRatingComponent,
    ProductComponent,
    DetailComponent,
    CustomePipe,
    DiscountPipe,
    ProductFilterPipe
],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            {path : 'detail/:id',canActivate: [ProductRouterGaurd], component: DetailComponent},
            {path : 'orders', component: OrdersComponent},
          ]
        )
    ],
    providers:[
        ProductRouterGaurd
    ]
})
export class ProductModule{

}