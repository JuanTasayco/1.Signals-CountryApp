import { Component, input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  country = input<Country>();

  redirectCard(country: any) {
    console.log(country.ccn3);
    this.router.navigate(["countries", country.ccn3])
  }


  constructor(private router: Router) { }
}
