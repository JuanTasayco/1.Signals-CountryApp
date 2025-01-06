import { Component, OnInit, signal } from '@angular/core';
import { FilterComponent } from '../../components/filter/filter.component';
import { SearchComponent } from '../../components/search/search.component';
import { ResultsCountriesComponent } from '../../components/results-countries/results-countries.component';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-countries',
  imports: [FilterComponent, SearchComponent, ResultsCountriesComponent],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss'
})
export class CountriesComponent implements OnInit {

  countries = signal<Country[] | null>(null);

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getAllCoutries().subscribe(response => {
      this.countries.set(response.slice(0, 10));
    })
  }
}
