import { NgModule } from '@angular/core';

import { NbTreeGridModule } from '@nebular/theme';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule, 
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { AdminRoutingModule, routedComponents } from "./admin-routing.module";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AdminComponent } from "./admin.component";
import { AdminCourseHandleComponent } from "./admin-course-handle/admin-course-handle.component";
import { AdminTeacherHandleComponent } from "./admin-teacher-handle/admin-teacher-handle.component";
import { AdminPaymentHandleComponent } from "./admin-payment-handle/admin-payment-handle.component";
import { AdminStudentHandleComponent } from "./admin-student-handle/admin-student-handle.component";

import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminAddStudentComponent } from './admin-add-student/admin-add-student.component';
import { AdminAddCourseComponent } from './admin-add-course/admin-add-course.component';
import { AdminAddTeacherComponent } from './admin-add-teacher/admin-add-teacher.component';


import { FormsModule as ngFormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';



@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    AdminRoutingModule,
    NbRadioModule,
    NbActionsModule,
    NbButtonModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbSelectModule,
    NbUserModule,
    ngFormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
    
  ],
  declarations: [
    ...routedComponents,
    AdminHomeComponent,
    AdminComponent,
    AdminCourseHandleComponent,
    AdminPaymentHandleComponent,
    AdminStudentHandleComponent,
    AdminTeacherHandleComponent,
    AdminProfileComponent,
    AdminAddStudentComponent,
    AdminAddTeacherComponent,
    AdminAddCourseComponent
  ],
})

export class AdminModule { }
