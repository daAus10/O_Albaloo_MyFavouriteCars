import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../helper-files/Car';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  @Input() superCars?: Car[];
showCars: Car[]
  constructor() {
    let car1: Car;
    let car2: Car;
    let car3: Car; 
    let car4: Car; 
    let car5: Car; 
    let car6: Car; 




car1 = {
  id: 0,
  type: "Hatchback",
  title: "Focus RS",
  creator: "Ford",
  imgURL: "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2020/04/ford-focus-rs-cancelled-e1587591676319.jpg",
  description: "Tiny but mighty",
  tags: ['fast', 'beautiful', 'reliable']
};
car2 = {
  id: 1,
  creator: "Ford",
  type: 'SUV',
  title: 'Escape SE',
  imgURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.avalonford.com%2Fpre-owned%2Fford%2Fescape%2F2017-white-se---4wd-25718635.html&psig=AOvVaw1xsTLtWbZu41ZaD573hywP&ust=1644283112886000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJiyrIq27PUCFQAAAAAdAAAAABAD",
  description: "big enough for everyone",
  tags: ['big', 'spacious', 'turbo']

};

car3 = {
  id: 2,
  creator: "Tesla",
  type: 'Sedan',
  title: 'Model S',
  imgURL: 'https://electrek.co/wp-content/uploads/sites/3/2021/01/Tesla-Model-S-Plaid.jpg?quality=82&strip=all',
  description: "Careful, it might shock you",
  tags: ['Electric', 'clean', 'quick']
    };


    car4 = {
      id: 3,
      creator: "Tesla",
      type: 'Sedan',
      title: 'Model S',
      imgURL: 'https://electrek.co/wp-content/uploads/sites/3/2021/01/Tesla-Model-S-Plaid.jpg?quality=82&strip=all',
      description: "Careful, it might shock you",
      tags: ['Electric', 'clean', 'quick']
        };
 car5 = {
      id: 4,
      creator: "Tesla",
      type: 'Sedan',
      title: 'Model S',
      imgURL: 'https://electrek.co/wp-content/uploads/sites/3/2021/01/Tesla-Model-S-Plaid.jpg?quality=82&strip=all',
      description: "Careful, it might shock you",
      tags: ['Electric', 'clean', 'quick']
        };

        car6 = {
          id: 5,
          creator: "Tesla",
          type: 'Sedan',
          title: 'Model S',
          imgURL: 'https://electrek.co/wp-content/uploads/sites/3/2021/01/Tesla-Model-S-Plaid.jpg?quality=82&strip=all',
          description: "Careful, it might shock you",
          tags: ['Electric', 'clean', 'quick']
            };
          

            this.showCars = [car1,car2,car3,car4,car5,car6];
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


