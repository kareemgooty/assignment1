import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ProductService } from '../products/product.service';
import { IProduct } from '../IProduct';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html'
})

export class DetailComponent implements OnInit {
    
prodId:Number;
price: number;
iproduct: IProduct[];
constructor(private _activatedRoute: ActivatedRoute, private _service: ProductService,private _router: Router){}
ngOnInit(): void {
   this.prodId = this._activatedRoute.snapshot.params['id'];
   this._service.getProductDetail(this.prodId).subscribe(
    (data) => this.iproduct = data
);
}
onBack(): void {
    this._router.navigate(['/products']);
}

}


/*template: `<h1>jjjjjj</h1>`*/
