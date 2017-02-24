import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
constructor(private http: Http) { }

    loginUser(username: string, password: string) {
        return this.http.post('/api/users/authenticate', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    loginDoctor(username: string, password: string) {
        return this.http.post('/api/doctors/authenticate', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let doctor = response.json();
                if (doctor && doctor.token) {
                    // store doctor details and jwt token in local storage to keep doctor logged in between page refreshes
                    localStorage.setItem('currentDoctor', JSON.stringify(doctor));
                }
            });
    }

    logoutUser() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    logoutDoctor() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentDoctor');
    }
}