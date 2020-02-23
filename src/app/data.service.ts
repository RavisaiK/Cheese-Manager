import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable ()
export class DataService {

    constructor ( private http:HttpClient) {}

    fetchData(): Observable<Object> {
       return this.http.get('http://10.104.3.27:7071/api/cheese_insight')
    }
}