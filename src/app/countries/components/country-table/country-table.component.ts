import { Component, Input } from "@angular/core"
import { Country } from "../../interfaces/country"

@Component({
  selector: "countries-contry-table",
  templateUrl: "./country-table.component.html",
  styles: `
    img {
      width: 30px;
      height: 25px;
    }`
})
export class CountryTableComponent {
  @Input()
  countries: Country[] = []
}
