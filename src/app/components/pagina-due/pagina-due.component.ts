import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-due',
  templateUrl: './pagina-due.component.html',
  styleUrls: ['./pagina-due.component.css']
})
export class PaginaDueComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['']);
  }

}
