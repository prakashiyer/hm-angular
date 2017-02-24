export class User {
    id: number;
    mobileNumber: number;
    emailId: string;
    password: string;
    firstName: string;
    lastName: string;
    gender: string;
    birthdate: date;
    primaryDoctor: number;
    primaryHospital: number;
    doctorsList: number[];
    hospitalsList: number[];
    image: byte[];
}