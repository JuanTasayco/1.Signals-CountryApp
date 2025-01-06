import { JsonPipe } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-results-countries',
  imports: [CardComponent],
  templateUrl: './results-countries.component.html',
  styleUrl: './results-countries.component.scss'
})
export class ResultsCountriesComponent implements OnInit {

  countries = input<any>();

  ngOnInit(): void {
    console.log(this.countries());
  }
}
