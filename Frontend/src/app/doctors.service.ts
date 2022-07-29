
import { observable, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Doctors } from './models/Dotctors';
// import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  result!: string;
  doctorsUrl: string = '';
  constructor() { }
  doctors: Doctors[] = [
    {
      id: 1,
      name: "Prasad",
      speciality: "Chiropractor",
      rating: 5,
      location: "GA",
      languages: ["english", "spanish"]
    },
    {
      id: 2,
      name: "Abdul",
      speciality: "Chiropractor",
      rating: 5,
      location: "GA",
      languages: ["english", "spanish"]
    }


  ]
  // getDoctors(): Observable<Doctors[]> {
  //   console.log(this.http.get<Doctors[]>(this.doctorsUrl.toString()));
  //   return this.http.get<Doctors[]>(this.doctorsUrl)
  // }
  getDoctors(): any {
    const doctorsObservableTest = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.doctors);
      }, 10);
    });
    return doctorsObservableTest;
  }

}


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


