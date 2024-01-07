import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../Models/Student';
import { ModalService } from '../../services/modal.service';
import { StudentList } from '../../Models/StudentList';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent implements OnInit {
  
  studentList: Array<StudentList> = [];
  studentData?: Student ;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  
  bodyText:string = 'This text can be updated in modal 1';
  /**
   *
   */
  constructor(private studentService:StudentService, protected modalService: ModalService) {
    
  }
  
  ngOnInit(): void {
    
    this.studentService.getstudentList().subscribe((response: Array<StudentList>) =>
      {
        this.studentList =response;
        // this.StudentList.forEach(x=>{
        //   console.log(x);
        // })
        //console.log(this.StudentList)
      })
  }

  loadpopup(id:number){
    console.log(id);
    this.studentService.getstudentDetails(id).subscribe(x=>
      {
        this.studentData = x;
        console.log(x);
      });
    this.modalService.open('modal-1')
    
  }

 

}
