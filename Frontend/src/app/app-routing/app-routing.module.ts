import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { DoctorFormComponent } from '../doctor-form/doctor-form.component';
import { LoginComponent } from '../login/login.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactComponent } from '../contact/contact.component';
import { FindingDoctorsComponent } from '../finding-doctors/finding-doctors.component';
import { SearchResultComponent } from '../search-result/search-result.component';
const routes: Routes = [
  // be default we show Todo list component
  { path: '', component: HomePageComponent },
  { path: 'homepages', component: HomePageComponent },
  { path: 'doctors', component: DoctorFormComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'searching', component: FindingDoctorsComponent },
  { path: 'result', component: SearchResultComponent },
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

