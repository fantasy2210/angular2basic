/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name:'binhPhuong'})

export class BinhPhuongPipe implements PipeTransform{
    transform(value:number,exportnent:string):number{
        let exp = parseFloat(exportnent);
        return Math.pow(value,isNaN(exp) ? 1:exp);
    }
}

