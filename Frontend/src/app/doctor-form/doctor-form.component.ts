import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
interface Doctors {
  value: string;
  viewValue: string;
}
interface Language{
  value : string;
  viewValue: string
}
@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css']
})
export class DoctorFormComponent implements OnInit {

  lookingForOption: Doctors[] = [
    { value: 'specilist', viewValue: 'Specialist' },
    { value: 'Chiro', viewValue: 'Chiropractor' },
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
  languages: Language[]=[
    { value: 'eng', viewValue: 'English' },
    { value: 'esp', viewValue: 'Spanish' },
    { value: 'fr', viewValue: 'French' },
  ]
  inuranceSelected = new FormControl('yes' as FloatLabelType);

  // @ts-ignore
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      lookingFor: "",
      insurance: this.inuranceSelected,
    })
    this.myForm.valueChanges.subscribe(console.log)
  }

  get lookingFor() {
    return this.myForm.get('lookingFor')
  }

  changeClient(value:any) {
    return value;
}

}
