import { ICustomer } from './ICustomer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class CustomerProvider {

    
    constructor(private _httCustCli:HttpClient){

    }

    public saveCustomer(customer: ICustomer): Observable<any>{
        //npm install
        //C:\angularcourse\Jan_Ang_Mrng\ngServer-master>npm start
        return this._httCustCli.post('http://localhost:3100/postEmployee', customer);
    }

}