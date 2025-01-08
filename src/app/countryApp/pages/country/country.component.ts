import { Component, Input, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country',
  imports: [],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})
export class CountryComponent implements OnInit {
  @Input("id") idCountry !: string;
  country !: Country;

  ngOnInit(): void {
    this.countryService.getCountryByCode(this.idCountry).subscribe(response => {
      this.country = response[0];
      console.log(this.country);
    })
  }

  constructor(private countryService: CountryService) { }

}
