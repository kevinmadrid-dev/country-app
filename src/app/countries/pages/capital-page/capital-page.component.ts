import { Component } from "@angular/core"

import { CountriesService } from "../../services/countries.service"

import { Country } from "../../interfaces/country"

@Component({
  selector: "countries-capital-page",
  templateUrl: "./capital-page.component.html"
})
export class CapitalPageComponent {
  countries: Country[] = []

  constructor(private countriesService: CountriesService) {}

  searchCapital(term: string): void {
    this.countriesService.searchCapital(term).subscribe((countries) => {
      this.countries = countries
    })
  }
}
