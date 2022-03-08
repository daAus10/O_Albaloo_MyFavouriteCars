import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Car } from '../helper-files/Car';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  @Output() newCarEvent: EventEmitter<Car> = new EventEmitter<Car>();
  newCar?: Car;

  constructor() { }

  ngOnInit(): void {
  }
// a function that defines the property of the car to be added
  addCar(id: string, maker: string, model: string,
     imageUrl: string, description: string,bodyStyle: string, 
     tags: string): void {
    this.newCar = {
      id: parseInt(id),
      carName: model,
      imgURL: imageUrl,
      description: description,
      maker: maker,
      bodyStyle: bodyStyle,
      tags: tags.split(",")
    };
    this.newCarEvent.emit(this.newCar);

    //just testing the console
    console.log("i think it")
  }

}
