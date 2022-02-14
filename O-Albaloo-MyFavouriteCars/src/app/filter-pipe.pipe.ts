import { Input, Pipe, PipeTransform } from '@angular/core';
import { Car } from './helper-files/Car';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

// filters input by the make of the car aka, ford, chevy , Tesla etc..
  transform(carList: Car[], make?: string){
    
      return carList.filter(showCars => showCars.maker == make ? showCars : null);

};


  }
  
  


