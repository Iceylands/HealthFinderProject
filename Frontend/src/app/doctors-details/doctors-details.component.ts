import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorsService } from '../doctors.service';
import { Doctors } from '../models/Dotctors';

@Component({
  selector: 'app-doctors-details',
  templateUrl: './doctors-details.component.html',
  styleUrls: ['./doctors-details.component.css']
})
export class DoctorsDetailsComponent implements OnInit {
  doctor?: Doctors
  id: String | null

  constructor(private route: ActivatedRoute, private doctorsService: DoctorsService, private router: Router) {
    this.id = route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    const doctorsObservable = this.doctorsService.getDoctorsDetails(this.id);
    doctorsObservable.subscribe((doctorsDataDetails : Doctors)=>{
      this.doctor = doctorsDataDetails;
    })
  }
  goBack(): void {
    this.router.navigate(['/result'])
}
}
