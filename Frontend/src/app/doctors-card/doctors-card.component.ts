import { Component, OnInit, Input } from '@angular/core';
import { Doctors } from '../models/Dotctors';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-doctors-card',
  templateUrl: './doctors-card.component.html',
  styleUrls: ['./doctors-card.component.css']
})
export class DoctorsCardComponent implements OnInit {
  @Input()
  doctor!: Doctors;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  gotoDoctor(id: number) : void{
    console.log(id);
    this.router.navigate(['/doctors', id])

    }

}
