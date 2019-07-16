import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { Personaggio } from 'src/app/model/personaggio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  counter: number;
  personaggi: Personaggio[];

  constructor(private swService: SwapiService) { }

  ngOnInit() {
    this.counter = 1;
    this.personaggi = [];
    this.showAll();
  }

  addValue(num: number) {
    this.counter += num;
  }

  spamName() {
    this.swService.find(this.counter)
      .subscribe((res) => {
        
        let response = res.body as Personaggio;
        console.log(response);
        alert("NAME: "+response.name+"\n PESO: "+response.mass);

      });
  }

  showAll() {
    this.swService.findAll()
      .subscribe((res) => {
        let response = res.body.results as Personaggio[];
        this.personaggi = response;
      });
  }

}
