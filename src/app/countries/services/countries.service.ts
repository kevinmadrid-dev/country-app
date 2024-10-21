import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"

import { catchError, Observable, of } from "rxjs"

import { Country } from "../interfaces/country"

@Injectable({
  providedIn: "root"
})
export class CountriesService {
  private apiUrl: string = "https://restcountries.com/v3.1"

  constructor(private hhtp: HttpClient) {}

  searchRegion(term: string): Observable<Country[]> {
    return this.hhtp
      .get<Country[]>(`${this.apiUrl}/region/${term}`)
      .pipe(catchError(() => of([])))
  }

  searchCountry(term: string): Observable<Country[]> {
    return this.hhtp
      .get<Country[]>(`${this.apiUrl}/name/${term}`)
      .pipe(catchError(() => of([])))
  }

  searchCapital(term: string): Observable<Country[]> {
    return this.hhtp
      .get<Country[]>(`${this.apiUrl}/capital/${term}`)
      .pipe(catchError(() => of([])))
  }

  searchCountryId(countryId: string): Observable<Country[]> {
    return this.hhtp
      .get<Country[]>(`${this.apiUrl}/alpha/${countryId}`)
      .pipe(catchError(() => of([])))
  }
}
