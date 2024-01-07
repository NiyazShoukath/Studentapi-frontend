import { StudentEnrollment } from "./StudentEnrollment";

export interface Student {
    id:number,
    firstName: string;
    lastname: string;
    dateOfBirth: Date;
    studentEnrollment?:StudentEnrollment
  }

