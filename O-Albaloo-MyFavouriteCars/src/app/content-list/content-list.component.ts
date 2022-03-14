import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../helper-files/Car';
import { CarServiceService } from '../car-service.service';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
 @Input()
 showCars: Car[]
  Car: any;
  Display(i: number){
    console.log(this.Car.id[i]);
    console.log(this.Car.maker[i]);
  }
 
  constructor(private CarServiceService:CarServiceService ) {

    this.showCars = []
}



searchFunc(searchString : String): String{

  var result = 'nope';
  if(searchString.length == 0){
    result = 'null';
  }
  for(var car of this.showCars ){
 
    if(car.maker === searchString){
      result = "yep";
    }
  }
  return result;
}
  ngOnInit(): void {
    this.CarServiceService.getContentObs().subscribe(contentlist => {
      this.showCars = contentlist; 
     });

   }
  }
  
  

 
// id: number;
//     title: string;
//     description: string;
//     creator: string;
//     imgURL?: string;
//     type?: string;
//     tags?: string[];
// }


