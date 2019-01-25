import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  races: any = [];


  constructor() { }

  ngOnInit() {
  }

  refreshRaces() {
    this.races = [{name: 'CKRY'},{name: 'London'},{name: 'Paris'}]
  }

  onNewRace() {

  }
  onButtonClick(event) {
    console.log(event);
  }
}
