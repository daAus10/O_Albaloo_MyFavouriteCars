import { Component, Input, OnInit } from '@angular/core';
import { ContentListComponent } from '../content-list/content-list.component';
import { Car } from '../helper-files/Car';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  @Input() carShow?: Car;

  constructor() {
    

  }

  ngOnInit(): void {
   
  }
}
  