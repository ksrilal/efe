import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherComponent } from "./teacher.component";
import { TeacherHomeComponent } from "./teacher-home/teacher-home.component";
import { TeacherUploadComponent } from "./teacher-upload/teacher-upload.component";
import { TeacherProgressComponent } from "./teacher-progress/teacher-progress.component";
import { TeacherProfileComponent } from "./teacher-profile/teacher-profile.component";

const routes: Routes = [{
    path: '',
    component: TeacherComponent,
    children: [
        {
            path: 'teacherhome',
            component: TeacherHomeComponent,
          },
          {
            path: 'teacherupload',
            component: TeacherUploadComponent,
          },
          {
            path: 'teacherprogress',
            component: TeacherProgressComponent,
          },
          {
            path: 'teacherprofile',
            component: TeacherProfileComponent,
          },
    ],
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class TeacherRoutingModule { }
  
  export const routedComponents = [
    TeacherComponent,
    TeacherHomeComponent,
    TeacherUploadComponent,
    TeacherProgressComponent,
    TeacherProfileComponent
  ];
  