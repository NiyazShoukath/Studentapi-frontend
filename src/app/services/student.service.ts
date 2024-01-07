import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../Models/Student';
import { Observable, map, shareReplay } from 'rxjs';
import { StudentList } from '../Models/StudentList';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

   httpHeaders: HttpHeaders = new HttpHeaders({
    "ABC123": 'SECRETKEY'
    }).set('content-type','application/json');

  constructor(private http: HttpClient) { 
   
  }
  getstudentList():Observable<Array<StudentList>> {
    return this.http.get<Array<StudentList>>("https://localhost:7061/api/Student", {headers: this.httpHeaders})
  }

  getstudentDetails(id:number):Observable<Student>{
    console.log(id);
    return this.http.get<Student>("https://localhost:7061/api/StudentDetails?Id="+id, {headers: this.httpHeaders});
  }
}
