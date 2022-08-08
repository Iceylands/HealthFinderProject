import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorsService } from '../doctors.service';
import { Doctors, PostDoctors } from '../models/Dotctors';


@Component({
  selector: 'app-add-doctors',
  templateUrl: './add-doctors.component.html',
  styleUrls: ['./add-doctors.component.css']
})
export class AddDoctorsComponent implements OnInit {
  // @ts-ignore
  myForm: FormGroup;
  // @ts-ignore
  doctor: PostDoctors;
  constructor(private fb: FormBuilder, private doctorsService: DoctorsService, private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      Name: [null],
      Specialisation: [null],
      State: [null],
      Rating: [null],
      Language: [null],
      Info: [null],

    })
    // this.myForm.valueChanges.subscribe(console.log)

  }
  search = () => {
    if(this.myForm.valid){

      console.log("Form", this.myForm.value)
      const doctorObservable = this.doctorsService.postDoctors({
        "name": this.myForm.value.Name,
        "specialty": this.myForm.value.Specialisation,
        "rating": this.myForm.value.Rating,
        "location": this.myForm.value.State,
        "languages": this.myForm.value.Language,
        "info": this.myForm.value.Info
      });
      doctorObservable.subscribe((doctorData: PostDoctors) => {
        this.doctor = doctorData; console.log(this.doctor)
        , (error: any) => console.log(error)
      })
      this.myForm.setValue({
        Name: [null],
        Specialisation: [null],
        State: [null],
        Rating: [null],
        Language: [null],
        Info: [null],
      })
      this.router.navigate(['/results'])
    }else{
      console.log("not valid")
    }
  }

}
