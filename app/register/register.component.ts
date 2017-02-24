import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User, Doctor } from '../_models/index';
import { AlertService, UserService, DoctorService } from '../_services/index';

import {BrowserModule} from '@angular/platform-browser';

import { CalendarModule,AutoCompleteModule } from 'primeng/primeng';




@Component({
    moduleId: module.id,
    templateUrl: `register.component.html`
    /*template: `
    <tabs>
      <tab tabTitle="Tab 1">Tab 1 Content</tab>
      <tab tabTitle="Tab 2">Tab 2 Content</tab>
    </tabs>
  `*/
})


export class RegisterComponent {
    user: User;
    doctor: Doctor;
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private doctorService: DoctorService,
        private alertService: AlertService) {
        this.user = new User();
        this.doctor = new Doctor();
    }


    registerUser() {
        this.loading = true;
        this.userService.create(this.user)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    registerDoctor() {
        this.loading = true;
        this.doctorService.create(this.doctor)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }



}