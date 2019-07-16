import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.css']
})
export class FiglioComponent implements OnInit {

  @Input() nome: string;

  constructor() { }

  ngOnInit() {
  }

}
