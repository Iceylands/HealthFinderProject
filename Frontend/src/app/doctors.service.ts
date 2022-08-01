
import { throwError, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Doctors } from './models/Dotctors';
// import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
// const headerDict = {
//   'Content-Type': 'application/json',
//   'Accept': 'application/json',
//   'Access-Control-Allow-Headers': 'Content-Type',
// }
// const requestOptions = {
//   headers: new Headers(headerDict),
// };

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

  result!: string;
  doctorsUrl: string = 'https://localhost:7127/api/Doctor';
  doctorsUrlDetails: string = 'https://localhost:7127/api/Doctor/';
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was:  ${JSON.stringify(error.error)}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.' + JSON.stringify(error.error));

  };
  doctors: Doctors[] = [
    {
      id: 1,
      name: "Prasad",
      specialty: "Chiropractor",
      rating: 5,
      location: "GA",
      languages: "english"
    },
    {
      id: 2,
      name: "Abdul",
      specialty: "Chiropractor",
      rating: 5,
      location: "GA",
      languages: "english"
    }


  ]
  setDoctors(id:any){
    this.doctorsUrlDetails = "https://localhost:7127/api/Doctor/"+id+'/?format=json'
  }
  getDoctors(): Observable<Doctors[]> {
    console.log("Response message", this.http.get<Doctors[]>(this.doctorsUrl, httpOptions));
    return this.http.get<Doctors[]>(this.doctorsUrl, httpOptions).pipe(retry(1), catchError(this.handleError))
  }

  getDoctorsDetails(id: any): Observable<Doctors> {
    this.setDoctors(id)
    console.log("Test",this.http.get<Doctors>(this.doctorsUrlDetails, httpOptions));
    return this.http.get<Doctors>(this.doctorsUrlDetails, httpOptions)
  }

}
