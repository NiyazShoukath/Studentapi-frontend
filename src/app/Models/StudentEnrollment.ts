import { StudentGrade } from "./StudentGrade";

export interface StudentEnrollment{
      id: number;
      studentId: number;
      collegeName : string  ;
      enrollmentStartDate :   Date ;
      enrollmentEndDate :   Date  ;
      studentGrade:StudentGrade
}

