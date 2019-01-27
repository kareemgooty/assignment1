import { Injectable } from '@angular/core';
import { IProduct } from '../IProduct';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()

export class ProductService {


    private _productUrl = 'https://ngproductsparam.herokuapp.com/api/getProductDetails';

    constructor(private _http: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl);
    }

    getProductDetail(id): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(`${this._productUrl}?productId=${id}`);
    }
}

/*
when we create the object or try to use extranal object rather than creating itself
*/


