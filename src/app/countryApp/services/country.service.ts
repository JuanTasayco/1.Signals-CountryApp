import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url: string = "https://restcountries.com/v3.1/";


  getAllCoutries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.url}all`);
  }


  constructor(private httpClient: HttpClient) { }
}
