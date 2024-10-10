import { Component } from "@angular/core"

@Component({
  selector: "countries-capital-page",
  templateUrl: "./capital-page.component.html"
})
export class CapitalPageComponent {
  searchCapital(term: string): void {
    console.log("SearchCapital")
    console.log({ term })
  }
}
