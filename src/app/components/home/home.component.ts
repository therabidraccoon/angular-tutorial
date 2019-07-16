import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  counter: number;

  constructor() { }

  ngOnInit() {
    this.counter = 10;
  }

  addValue(num:number){
    this.counter += num;
  }

}
