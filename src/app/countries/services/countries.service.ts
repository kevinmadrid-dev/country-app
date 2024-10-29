import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"

import { catchError, delay, map, Observable, of } from "rxjs"

import { Country } from "../interfaces/country"

@Injectable({
  providedIn: "root"
})
export class CountriesService {
  private apiUrl: string = "https://restcountries.com/v3.1"

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.hhtp.get<Country[]>(url).pipe(
      catchError(() => of([])),
      delay(2000)
    )
  }

  constructor(private hhtp: HttpClient) {}

  searchRegion(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${term}`
    return this.getCountriesRequest(url)
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`
    return this.getCountriesRequest(url)
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`
    return this.getCountriesRequest(url)
  }

  searchCountryId(countryId: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${countryId}`

    return this.hhtp.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    )
  }
}
