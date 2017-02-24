import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Doctor } from '../_models/index';

@Injectable()
export class DoctorService {
constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/doctors', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/doctors/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(doctor: Doctor) {
        return this.http.post('/api/doctors', doctor, this.jwt()).map((response: Response) => response.json());
    }

    update(doctor: Doctor) {
        return this.http.put('/api/doctors/' + doctor.id, doctor, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/doctors/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentDoctor = JSON.parse(localStorage.getItem('currentDoctor'));
        if (currentDoctor && currentDoctor.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentDoctor.token });
            return new RequestOptions({ headers: headers });
        }
    }
}