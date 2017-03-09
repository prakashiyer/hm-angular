import { Component, NgModule, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { User, Doctor } from '../_models/index';
import { AlertService, UserService, DoctorService } from '../_services/index';

import {BrowserModule} from '@angular/platform-browser';

import { CalendarModule,AutoCompleteModule, FileUploadModule } from 'primeng/primeng';

@Component({
    moduleId: module.id,
    templateUrl: `register.component.html`
})


export class RegisterComponent {
    user: User;
    doctor: Doctor;
    loading = false;
    doctorResults: string[];
    hospitalResults: string[];
    qualificationResults: string[];
    specializationResults: string[];

    constructor(
        private router: Router,
        private userService: UserService,
        private doctorService: DoctorService,
        private alertService: AlertService,
        private element: ElementRef) {
        this.user = new User();
        this.doctor = new Doctor();
    }

    searchDoctors(event) {
        this.doctorResults = ['abc','pqer'];
    }

    searchHospitals(event) {
        this.hospitalResults = ['fortis','jupiter'];
    }

    searchQualifications(event) {
        this.qualificationResults = ['MBBS','MD'];
    }

    changeListner(event) {
        var reader = new FileReader();
        var image = this.element.nativeElement.querySelector('.image');

        reader.onload = function(e) {
            var src = e.target.result;
            image.src = src;
            user.image = src;
        };

        reader.readAsDataURL(event.target.files[0]);
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