import { Pipe, PipeTransform } from '@angular/core';
import { Tourist } from '../entities/tourist';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
// transform method provided by pipe which perform all operation inside pipe (tourist)
transform(tourists:Tourist[], searchValue:string): Tourist[] { 
     if(!tourists || !searchValue)
   {    
     return tourists;  } 
         //filter all data on the basic of firstName and id (tourist)
    return tourists.filter(tourist =>  
         tourist.firstName.toLocaleLowerCase().
       includes(searchValue.toLocaleLowerCase()) ||  tourist.id?.toString().
       toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())  
       
       );
    }
}
