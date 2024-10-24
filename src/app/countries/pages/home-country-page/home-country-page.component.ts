import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"

import { CountriesService } from "../../services/countries.service"

@Component({
  selector: "countries-home-country-page",
  templateUrl: "./home-country-page.component.html",
  styles: ``
})
export class HomeCountryPageComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({ countryId }) => {
      this.countriesService.searchCountryId(countryId).subscribe((country) => {
        if (!country) {
          return this.router.navigate(["/country"])
        }

        return
      })
    })
  }
}
