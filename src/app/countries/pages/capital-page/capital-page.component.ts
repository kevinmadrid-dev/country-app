import { Component } from "@angular/core"

import { CountriesService } from "../../services/countries.service"

@Component({
  selector: "countries-capital-page",
  templateUrl: "./capital-page.component.html"
})
export class CapitalPageComponent {
  constructor(private countriesService: CountriesService) {}

  searchCapital(term: string): void {
    console.log("SearchCapital")
    console.log({ term })

    this.countriesService.searchCapital(term)
  }
}
