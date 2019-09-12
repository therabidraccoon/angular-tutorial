import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  @Input() testo: string;

  @Output() testoChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendNewText(event) {
    console.log("Ricevuto input!");
    console.log(event);
    this.testoChange.emit(event.target.value);
  }

}
