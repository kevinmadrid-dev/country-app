import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { CapitalPageComponent } from "./pages/capital-page/capital-page.component"
import { CountryPageComponent } from "./pages/country-page/country-page.component"
import { RegionPageComponent } from "./pages/region-page/region-page.component"
import { IdCountryPageComponent } from "./pages/id-country-page/id-country-page.component"

const routes: Routes = [
  {
    path: "region",
    component: RegionPageComponent
  },
  {
    path: "country",
    component: CountryPageComponent
  },
  {
    path: "capital",
    component: CapitalPageComponent
  },
  {
    path: "id/:countryId",
    component: IdCountryPageComponent
  },
  {
    path: "**",
    component: CapitalPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule {}
