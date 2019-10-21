import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  h1Style:boolean;
  constructor() { }

  ngOnInit() {
  }

  clickMe() {
    console.log("Home Component Event Triggered");
    this.h1Style=!this.h1Style;
  }

}
