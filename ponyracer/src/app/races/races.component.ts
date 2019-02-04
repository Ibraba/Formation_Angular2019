import { Component, OnInit } from '@angular/core';
import { RacesServiceWithHttpService } from "./races-service-with-http.service";

@Component({
  selector: 'ns-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  races: any = [];

  asyncGreeting = new Promise(resolve => {
    window.setTimeout(() => resolve({ name: 'CPoivrez' }), 10000);
  });


  constructor(private racesServiceWithHttpService: RacesServiceWithHttpService) { }

  ngOnInit() {
  }

  refreshRaces() {
    this.races = [{name: 'CKRY'},{name: 'London'},{name: 'Paris'}]
  }

  onNewRace() {
    this.racesServiceWithHttpService.list();
  }

  onRaceService() {
    this.racesServiceWithHttpService.list();
  }
  onButtonClick(event) {
    console.log(event);
  }
}
