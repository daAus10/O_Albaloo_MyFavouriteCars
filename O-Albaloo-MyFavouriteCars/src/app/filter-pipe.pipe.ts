import { Input, Pipe, PipeTransform } from '@angular/core';
import { Car } from './helper-files/Car';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

// filters input by the make of the car aka, ford, chevy , Tesla etc..
  transform(tags: Car[]): Car[]{
    
  
  return tags.filter(function (tag){
    return tag.tags != null ? tag.tags.length != 0 : null;
    //  return showCars.filter(showCars => showCars.maker == maker ? showCars : null);

});


  }
  
  }


