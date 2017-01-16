/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Component, OnInit} from '@angular/core';
import {EmployeeService} from './services/employee.service';
@Component({
    selector: "employee-list",
    templateUrl: 'application/employee.component.html',
    providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
    public employees: any[];
    constructor(private employeeService: EmployeeService){};

    ngOnInit() {
        this.employees = this.employeeService.GetList();
    }
}