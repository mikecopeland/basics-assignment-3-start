import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  clickLog: string[];
  showParagraph = false;

  constructor() {
    this.clickLog = [];
  }

  ngOnInit() {
  }

  handleClick(){
    this.showParagraph = !this.showParagraph;
    this.clickLog.push(new Date().toUTCString());
  }
}
