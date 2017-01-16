/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()

export class EmployeeService {
    private apiUrl="http://587c8fb706972c1200b215ff.mockapi.io/api/v1/employees";
constructor(private _http: Http){};
    GetList(): Observable<any[]> {
        return this._http.get(this.apiUrl).map((response:Response)=>response.json());
    }
}
