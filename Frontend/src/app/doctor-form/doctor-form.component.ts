import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';

import { observable } from 'rxjs';
import { DoctorsService } from '../doctors.service';
import { Doctors } from '../models/Dotctors';

interface DoctorsChoice {
  value: string;
  viewValue: string;
}
interface InsuranceChoice {
  value: string;
  viewValue: string;
}
interface Language {
  value: string;
  viewValue: string
}
@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css']
})
export class DoctorFormComponent implements OnInit {

  lookingForOption: DoctorsChoice[] = [
    { value: 'fam-doc', viewValue: 'Family Doc' },
    { value: 'gyno', viewValue: 'Gyno' },
    { value: 'chiro', viewValue: 'Chiropractor' },
  ];
  insuranceChoice: InsuranceChoice[] = [
    { value: 'Yes', viewValue: 'Y' },
    { value: 'No', viewValue: 'N' },
  ];
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];
  languages: Language[] = [
    { value: 'English', viewValue: 'eng' },
    { value: 'Spanish', viewValue: 'esp' },
    { value: 'French', viewValue: 'fr' },
  ]
  // lookingForSelected = new FormControl()
  // inuranceSelected = new FormControl('yes' as FloatLabelType);

  // @ts-ignore
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private doctorsService: DoctorsService, private router: Router) {
  }
  doctors!: Doctors[];
  ngOnInit() {
    this.myForm = this.fb.group({
      lookingFor: [null],
      inuranceSelected: [null],
      state: [null],
      language: [null]
    })
    this.myForm.valueChanges.subscribe(console.log)
  }

  changeClient(value: any) {
    return value;
  }
  search() {
    console.log(this.myForm.value.lookingFor + ";" + this.myForm.value.state + ";" + this.myForm.value.language)
    const doctorObservable = this.doctorsService.searchDoctors(this.myForm.value.lookingFor + ";" + this.myForm.value.state + ";" + this.myForm.value.language);
    doctorObservable.subscribe((doctorData: Doctors[]) => {
      this.doctors = doctorData;
      console.log("collected docotrs", this.doctors)
      this.router.navigate(['/results'])
    })

  }

  gotoDoctor(id:number):void{
    console.log(id)
    this.router.navigate(['/doctor', id])
  }
}
