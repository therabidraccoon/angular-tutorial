import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-due',
  templateUrl: './pagina-due.component.html',
  styleUrls: ['./pagina-due.component.css']
})
export class PaginaDueComponent implements OnInit {

  title: string;
  contatore: number;

  constructor(private router:Router) { }

  ngOnInit() {
    this.title = "Pagina DUE!!!";
    this.contatore = 1;
  }

  goBack(){
    this.router.navigate(['']);
  }

  addValue(num:number){
    this.contatore += num;
  }

}
