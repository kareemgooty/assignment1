import { Component, OnInit } from "@angular/core";
import { IProduct } from '../IProduct';
import { ProductService } from './product.service';
import { Router} from '@angular/router';

@Component(
    {
        selector: 'app-product',
        templateUrl: './product.component.html',
        styleUrls: ['./product.component.css']
    }
)

export class ProductComponent implements OnInit{

title: String = "My first Angular App"  
showImage: boolean=true;
userInput: String;    
info: String = 'No of item in search: ';
imageWidth: Number = 100;
productFilter = (a) => { return a > 2; };
prods: IProduct[];

    constructor(private prdService: ProductService){}

    toggleImage(){
        this.showImage = !this.showImage;
    }
    onDataRecive(msg:string){
        this.title = msg;
    }
    ngOnInit(): void {
        this.prdService.getProducts()
            .subscribe((data) => this.prods = data);
    }




}