import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RacesServiceWithHttpService {

  constructor(private http: HttpClient) { }

  list() {
    console.log('Races Service With Http Service');
    return this.http.get('/api/races');
  }
}
