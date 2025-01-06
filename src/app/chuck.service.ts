import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  getJoke() {
    return this.httpClient.get("https://api.chucknorris.io/jokes/random")
  }

  constructor(private httpClient: HttpClient) { }
}
