import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student/student-list/student-list.component';

const routes: Routes = [
  {
    path:"",
    component:StudentListComponent,
    children:[{
        path:'',
        loadChildren:()=>
        import("./student/student.module").then(
          m=> m.StudentModule
        )
    }]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
