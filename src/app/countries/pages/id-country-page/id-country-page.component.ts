import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"

import { CountriesService } from "../../services/countries.service"
import { Country } from "../../interfaces/country"

@Component({
  selector: "countries-id-country-page",
  templateUrl: "./id-country-page.component.html",
  styles: ``
})
export class IdCountryPageComponent implements OnInit {
  country?: Country

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({ countryId }) => {
      this.countriesService.searchCountryId(countryId).subscribe((country) => {
        if (!country) return this.router.navigate(["/country"])

        return (this.country = country)
      })
    })
  }
}
