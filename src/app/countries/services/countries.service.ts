import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"

import { Observable } from "rxjs"

import { Country } from "../interfaces/country"

@Injectable({
  providedIn: "root"
})
export class CountriesService {
  private apiUrl: string = "https://restcountries.com/v3.1"

  constructor(private hhtp: HttpClient) {}

  searchCapital(term: string): Observable<Country[]> {
    console.log(term)

    return this.hhtp.get<Country[]>(`${this.apiUrl}/capital/${term}`)
  }
}
