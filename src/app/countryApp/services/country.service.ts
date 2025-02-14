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

  getCountryByName(country: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.url}name/${country}`)
  }

  getCountriesByRegion(region: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.url}region/${region}`)
  }

  getCountryByCode(codes: string) {
    return this.httpClient.get<Country[]>(`${this.url}alpha`, {
      params: { codes }
    });

  }

  constructor(private httpClient: HttpClient) { }
}
