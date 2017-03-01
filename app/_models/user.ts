export class User {
    id: number;
    mobileNumber: number;
    emailId: string;
    password: string;
    firstName: string;
    lastName: string;
    gender: string;
    birthdate: date;
    primaryDoctor: string;
    primaryHospital: string;
    doctorsList: number[];
    hospitalsList: number[];
    image: file;
}