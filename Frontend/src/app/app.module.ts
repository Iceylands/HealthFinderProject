import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, Router, RouterModule, ROUTES } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { NavContainerComponent } from './nav-container/nav-container.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'
import {MatButtonModule} from '@angular/material/button'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatChipsModule} from '@angular/material/chips'
import { MatOptionModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { FindingDoctorsComponent } from './finding-doctors/finding-doctors.component';
import { SearchResultComponent } from './search-result/search-result.component'
@NgModule({
  declarations: [
    AppComponent,
    DoctorFormComponent,
    HomePageComponent,
    LoginComponent,
    AboutUsComponent,
    ContactComponent,
    NavContainerComponent,
    FindingDoctorsComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatOptionModule,
    MatRadioModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
