/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Injectable} from '@angular/core';

@Injectable()

export class EmployeeService {
    GetList(): any[] {
        let employees = [
            {id: 1, name: 'Nguyễn Thái TOàn'},
            {id: 2, name: 'Lê Thị Đẹp'},
            {id: 3, name: 'Nguyễn Thảo My'},
            {id: 3, name: 'Nguyễn Phúc Lâm'}
            ];
        return employees;
    }
}
