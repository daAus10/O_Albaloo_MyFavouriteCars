import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from './helper-files/Car';
import { ContentList } from './helper-files/contentDb';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  constructor(private messageService: MessageService) { }

  getCar(): Car[] {
    return ContentList;
  }

  getContentObs(): Observable<Car[]> {

    const cars = of(ContentList);
  this.messageService.add('car-service: fetched heroes');
  //return cars;
    return of(ContentList);
  }

  getSpecificContentObs(): Observable<Car> {
    return of(ContentList[0]);
  }
}
