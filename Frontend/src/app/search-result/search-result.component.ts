import { Component, Input, OnInit } from '@angular/core';
import { Doctors } from '../models/Dotctors';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorsService } from '../doctors.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  doctors!: Doctors[];
  constructor(private doctorsService:DoctorsService, private router:Router) { }

  ngOnInit(): void {
    const doctorsObservable = this.doctorsService.getDoctors();
    doctorsObservable.subscribe((doctorsData: Doctors[])=>{
      this.doctors = doctorsData;
      console.log("From search result",this.doctors)
    })
  }
  gotoDoctor(id:number):void{
    console.log(id)
    this.router.navigate(['/doctor', id])
  }

}
