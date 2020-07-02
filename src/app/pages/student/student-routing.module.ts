import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentComponent } from "./student.component";
import { StudentHomeComponent } from "./student-home/student-home.component";
import { StudentCourseComponent } from "./student-course/student-course.component";
import { StudentProgressComponent } from "./student-progress/student-progress.component";
import { StudentProfileComponent } from "./student-profile/student-profile.component";


const routes: Routes = [{
    path: '',
    component: StudentComponent,
    children: [
        {
            path: 'studenthome',
            component: StudentHomeComponent,
          },
          {
            path: 'studentcourse',
            component: StudentCourseComponent,
          },
          {
            path: 'studentprogress',
            component: StudentProgressComponent,
          },
          {
            path: 'studentprofile',
            component: StudentProfileComponent,
          },
    ],
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class StudentRoutingModule { }
  
  export const routedComponents = [
    StudentComponent,
    StudentHomeComponent,
    StudentCourseComponent,
    StudentProgressComponent,
    StudentProfileComponent
  ];
  