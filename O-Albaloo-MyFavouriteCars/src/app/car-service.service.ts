import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from './helper-files/Car';
import { ContentList } from './helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  constructor() { }

  getCar(): Car[] {
    return ContentList;
  }

  getContentObs(): Observable<Car[]> {
    return of(ContentList);
  }

  getSpecificContentObs(): Observable<Car> {
    return of(ContentList[0]);
  }
}
