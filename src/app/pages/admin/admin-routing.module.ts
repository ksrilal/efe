import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AdminComponent } from "./admin.component";
import { AdminCourseHandleComponent } from "./admin-course-handle/admin-course-handle.component";
import { AdminPaymentHandleComponent } from "./admin-payment-handle/admin-payment-handle.component";
import { AdminStudentHandleComponent } from "./admin-student-handle/admin-student-handle.component";
import { AdminTeacherHandleComponent } from "./admin-teacher-handle/admin-teacher-handle.component";
import { AdminProfileComponent } from "./admin-profile/admin-profile.component";
import { AdminAddCourseComponent } from "./admin-add-course/admin-add-course.component";
import { AdminAddStudentComponent } from "./admin-add-student/admin-add-student.component";
import { AdminAddTeacherComponent } from "./admin-add-teacher/admin-add-teacher.component";

const routes: Routes = [{
    path: '',
    component: AdminComponent,
    children: [
        {
            path: 'adminhome',
            component: AdminHomeComponent,
          },
          {
            path: 'adminstudenthandle',
            component: AdminStudentHandleComponent,
          },
          {
            path: 'adminteacherhandle',
            component: AdminTeacherHandleComponent,
          },
          {
            path: 'adminpaymenthandle',
            component: AdminPaymentHandleComponent,
          },
          {
            path: 'admincoursehandle',
            component: AdminCourseHandleComponent,
          },
          {
            path: 'adminprofile',
            component: AdminProfileComponent,
          },
          {
            path: 'adminaddcourse',
            component: AdminAddCourseComponent,
          },
          {
            path: 'adminaddstudent',
            component: AdminAddStudentComponent,
          },
          {
            path: 'adminaddteacher',
            component: AdminAddTeacherComponent,
          },
    ],
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AdminRoutingModule { }
  
  export const routedComponents = [
    AdminHomeComponent,
    AdminComponent,
    AdminCourseHandleComponent,
    AdminPaymentHandleComponent,
    AdminStudentHandleComponent,
    AdminTeacherHandleComponent,
    AdminProfileComponent,
    AdminAddCourseComponent,
    AdminAddStudentComponent,
    AdminAddTeacherComponent
  ];
  