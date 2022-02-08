import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../helper-files/Car';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  @Input() showCars?: Car;

  constructor() {
    

  }

  ngOnInit(): void {
   
  }
  logId(): void{
    console.log("id: ", this.showCars?.id, " | title is: ", this.showCars?.carName);
  }

}
  