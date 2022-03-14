import { Component, Input, OnInit } from '@angular/core';
import { CarServiceService } from './car-service.service';
import { Car } from './helper-files/Car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'O_Albaloo_MyFavouriteCars';
  @Input() carService: Car[];
  showCars!: Car[];

  constructor(private CarServiceService: CarServiceService) {
    this.carService = [];
}
 
ngOnInit(): void {
  this.CarServiceService.getContentObs().subscribe(contentlist => {
    this.showCars = contentlist; 
   });

 }
}