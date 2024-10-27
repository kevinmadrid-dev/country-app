import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { CountriesRoutingModule } from "./countries-routing.module"
import { SharedModule } from "../shared/shared.module"

import { CapitalPageComponent } from "./pages/capital-page/capital-page.component"
import { CountryPageComponent } from "./pages/country-page/country-page.component"
import { RegionPageComponent } from "./pages/region-page/region-page.component"
import { IdCountryPageComponent } from "./pages/id-country-page/id-country-page.component"
import { CountryTableComponent } from "./components/country-table/country-table.component"

@NgModule({
  declarations: [
    CapitalPageComponent,
    CountryPageComponent,
    RegionPageComponent,
    IdCountryPageComponent,
    CountryTableComponent
  ],
  imports: [CommonModule, CountriesRoutingModule, SharedModule]
})
export class CountriesModule {}
