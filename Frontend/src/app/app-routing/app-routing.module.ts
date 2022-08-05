import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { DoctorFormComponent } from '../doctor-form/doctor-form.component';
import { LoginComponent } from '../login/login.component';
import { SearchResultComponent } from '../search-result/search-result.component';
import { DoctorsDetailsComponent } from '../doctors-details/doctors-details.component';
import { AddDoctorsComponent } from '../add-doctors/add-doctors.component';

const routes: Routes = [
  // be default we show Todo list component
  { path: '', component: HomePageComponent },
  { path: 'homepage', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'homepages', component: HomePageComponent },
  { path: 'doctors', component: DoctorFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'result', component: SearchResultComponent },
  { path: 'results', component: SearchResultComponent },
  { path: 'add', component: AddDoctorsComponent },
  { path: 'doctor/:id', component: DoctorsDetailsComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

