import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { CapitalPageComponent } from "./pages/capital-page/capital-page.component"
import { CountryPageComponent } from "./pages/country-page/country-page.component"
import { RegionPageComponent } from "./pages/region-page/region-page.component"
import { HomeCountryPageComponent } from "./pages/home-country-page/home-country-page.component"

const routes: Routes = [
  {
    path: "capital",
    component: CapitalPageComponent
  },
  {
    path: "country",
    component: CountryPageComponent
  },
  {
    path: "region",
    component: RegionPageComponent
  },
  {
    path: "id/:countryId",
    component: HomeCountryPageComponent
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
