import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esempio-input',
  templateUrl: './esempio-input.component.html',
  styleUrls: ['./esempio-input.component.css']
})
export class EsempioInputComponent implements OnInit {

  testo: string;

  constructor() { }

  ngOnInit() {
    this.testo = "Scrivi qui";
  }

}
