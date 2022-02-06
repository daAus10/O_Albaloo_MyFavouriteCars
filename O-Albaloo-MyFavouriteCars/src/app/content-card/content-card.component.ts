import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  list: ContentList;
  item1: Content;
  item2: Content;
  item3: Content;

  constructor() {
    this.item1 = {
      id: 0,
      title: 'Focus',
      description: "Tiny but mighty",
      creator: 'Ford',
      type: "Hatchback",
      imgURL: 'https://pbs.twimg.com/profile_images/689203034488872960/-YXshEXv_400x400.jpg'
    };
    this.item2 = {
      id: 1,
      title: 'Escape',
      description: "Big enough for everyone",
      creator: 'Ford',
      type: "SUV",
      imgURL: 'https://chrome.cdn.searchoptics.com/inventory_parser/uploads/2017/ford/escape/1FMCU9GDXHUA71740/640/2017-ford-escape-1503307922.jpg'
    };
    this.item3 = {
      id: 2,
      title: 'Model S',
      description: "Careful, it could shock you",
      creator: 'Tesla',
      imgURL: 'https://www.motortrend.com/uploads/sites/5/2021/01/Tesla_Model_S_Refresh_3.jpg?fit=around%7C875:492',
      type: 'Sedan'
    };
    this.list = new ContentList();
    this.list.addContent(this.item1);
    this.list.addContent(this.item2);
    this.list.addContent(this.item3);
    // console.log("Looking at the content list ", this.list.contentArray, " and the length is: ", this.list.arrayLength());
    // console.log("The html is: ", this.list.generateHtml(0));

  }

  ngOnInit(): void {
  }

}