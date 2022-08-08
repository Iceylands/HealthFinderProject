
import { throwError, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Doctors, PostDoctors } from './models/Dotctors';
import { Users } from './models/Users';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  })
}
@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was:  ${JSON.stringify(error.error)}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.' + JSON.stringify(error.error));

  };

  userURL = "https://localhost:7127/api/User/"
  doctorsUrlDetails = "https://localhost:7127/api/User/"
  constructor(private http: HttpClient) { } ;
  setDoctors(id: any) {
    this.doctorsUrlDetails = "https://localhost:7127/api/Doctor/" + id + '/?format=json'
  }
  getUsers(): Observable<Doctors[]> {
    console.log("Response message", this.http.get<Doctors[]>(this.userURL, httpOptions));
    return this.http.get<Doctors[]>(this.userURL, httpOptions).pipe(retry(1), catchError(this.handleError))
  }
  getUserDetails(id: any): Observable<Doctors> {
    this.setDoctors(id)
    console.log("Test", this.http.get<Doctors>(this.doctorsUrlDetails, httpOptions));
    return this.http.get<Doctors>(this.doctorsUrlDetails, httpOptions)
  }


}
