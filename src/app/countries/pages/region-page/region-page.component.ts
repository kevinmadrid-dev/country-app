import { Component } from "@angular/core"

import { Country } from "../../interfaces/country"

import { CountriesService } from "../../services/countries.service"

@Component({
  selector: "countries-region-page",
  templateUrl: "./region-page.component.html",
  styles: ``
})
export class RegionPageComponent {
  countries: Country[] = []

  constructor(private countriesService: CountriesService) {}

  searchRegion(term: string): void {
    this.countriesService.searchRegion(term).subscribe((countries) => {
      this.countries = countries
    })
  }
}
