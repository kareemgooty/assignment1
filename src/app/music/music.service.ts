import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class MusicService{
    constructor(private _http: HttpClient){}
    getAllMusic():Observable<any[]>{
    return this._http.get<any[]>("http://localhost:3000/music");
    }
}