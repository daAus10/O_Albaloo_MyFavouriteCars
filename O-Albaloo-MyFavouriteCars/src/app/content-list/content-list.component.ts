import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../helper-files/Car';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
 
showCars: Car[]
  constructor() {

    this.showCars = [
     {
  id: 0,
  bodyStyle: "Hatchback",
  carName: "Focus RS",
  maker: "Ford",
  imgURL: "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2020/04/ford-focus-rs-cancelled-e1587591676319.jpg",
  description: "Tiny but mighty",
  tags: ['fast', 'beautiful', 'reliable']
}, {
  id: 1,
  maker: "Ford",
  bodyStyle: 'SUV',
  carName: 'Escape SE',
  imgURL: "https://blogmedia.dealerfire.com/wp-content/uploads/sites/275/2017/07/2017-Ford-Escape-exterior-White-Gold_o.jpg",
  description: "big enough for everyone",
  tags: ['big', 'spacious', 'turbo']

}, {
  id: 2,
  maker: "Tesla",
  bodyStyle: 'Sedan',
  carName: 'Model S',
  imgURL: 'https://electrek.co/wp-content/uploads/sites/3/2021/01/Tesla-Model-S-Plaid.jpg?quality=82&strip=all',
  description: "Careful, it might shock you",
  tags: ['Electric', 'clean', 'quick']
    },
     {
        id: 3,
      maker: "Chevorlet",
      bodyStyle: 'SUV',
      carName: 'Equinox',
      imgURL: 'https://cdn.motor1.com/images/mgl/7M1mW/s3/2021-chevy-equinox-leak.jpg',
      description: "a new era of SUVs",
      tags: ['Hybrid', 'economy', 'fresh']
        }, 
        {
      id: 4,
      maker: "Dodge",
      bodyStyle: 'Coupe',
      carName: 'Challenger R/T',
      imgURL: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-dodge-challenger-mmp-1-1599685173.jpg?crop=0.732xw:1.00xh;0.0224xw,0&resize=640:*',
      description: "as fast as a bullet",
      tags: ['2doors', 'boat', 'crazy']
        },
         {
          id: 5,
          maker: "Chevorlet",
          bodyStyle: 'Coupe',
          carName: 'Camaro RS',
          imgURL: 'https://hips.hearstapps.com/roa.h-cdn.co/assets/16/23/1465220092-camaro-bumblebee.jpg',
          description: "it can eat a Mustang",
          tags: ['v8', 'yellow', 'transforms']
         }];
          
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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


