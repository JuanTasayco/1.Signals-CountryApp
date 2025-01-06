import { Component } from '@angular/core';
import { FilterComponent } from '../../components/filter/filter.component';
import { SearchComponent } from '../../components/search/search.component';
import { ResultsCountriesComponent } from '../../components/results-countries/results-countries.component';

@Component({
  selector: 'app-countries',
  imports: [FilterComponent, SearchComponent, ResultsCountriesComponent],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss'
})
export class CountriesComponent {

}
