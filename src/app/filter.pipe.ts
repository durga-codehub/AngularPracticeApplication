import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
  //pure:false  -- true by default
})
export class FilterPipe implements PipeTransform {

  transform(value: any, srchTxt:any): any {
    const result =srchTxt? value.filter((v:any)=> {
   // return v.name.toLowerCase().includes(srchTxt.toLowerCase()) -->only for name search
   return Object.entries(v).some(item=>String(item).toLowerCase().includes(String(srchTxt).toLowerCase()))
      
   } ):value;
    return result;
  }

}
