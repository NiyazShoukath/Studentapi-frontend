import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from '../services/student.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from '../services/modal.service';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [
    StudentListComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    
    FormsModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers:[StudentService, ModalService]
})
export class StudentModule { }
