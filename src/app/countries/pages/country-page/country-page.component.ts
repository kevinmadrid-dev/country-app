import { Component } from "@angular/core"

import { CountriesService } from "../../services/countries.service"

import { Country } from "../../interfaces/country"

@Component({
  selector: "countries-country-page",
  templateUrl: "./country-page.component.html"
})
export class CountryPageComponent {
  countries: Country[] = []

  constructor(private countriesService: CountriesService) {}

  searchCountry(term: string): void {
    this.countriesService.searchCountry(term).subscribe((countries) => {
      this.countries = countries
    })
  }
}
