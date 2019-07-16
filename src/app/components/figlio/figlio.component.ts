import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.css']
})
export class FiglioComponent implements OnInit {

  @Input() nome: string;
  @Input() counter: number;

  @Output() counterUp = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  add(value: number){
    console.log(value);
    this.counterUp.emit(value);
  }

}
