import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Doctors } from '../models/Dotctors';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorsService } from '../doctors.service';
import { Subscription } from 'rxjs';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit, OnDestroy {
  message!: string;
  subscription!: Subscription;
  doctors!: Doctors[];
  constructor(private data: DataShareService, private doctorsService: DoctorsService, private otherDoct: DoctorsService, private router: Router, public activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
    console.log("This is what server sees", this.message)
    if (!this.message.includes("default message")) {
      localStorage.setItem("message", JSON.stringify(this.message));
      console.log("local  if storage", localStorage.getItem("message"))
      const doctorObservable = this.doctorsService.searchDoctors(this.message);
      doctorObservable.subscribe((doctorData: Doctors[]) => {
        console.log("before collected ", this.doctors)
        this.doctors = doctorData;
        console.log("collected ", this.doctors)
      })

    } else {
      console.log("local  else storage", localStorage.getItem("message"))
      const doctorObservable = this.otherDoct.searchDoctors(localStorage.getItem("message"));
      doctorObservable.subscribe((doctorData2: Doctors[]) => {
        this.doctors = doctorData2;
        console.log("collected docotrs from search result conponenet", this.doctors)
      })
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  gotoDoctor(id: number): void {
    console.log(id)
    this.router.navigate(['/doctor', id])
  }
}
