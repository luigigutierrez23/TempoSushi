import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name:'ProductsFilter'})

export class FilterPipe implements PipeTransform {
    transform(items: any[], works: string): any {    

        if(works === 'all'){ 
            return items 
        } 
        else{
            return items.filter(item =>{    

              if(item.category === works){
                return item;
              }  
            
            });   
        }    
        
      }    
        
    } 