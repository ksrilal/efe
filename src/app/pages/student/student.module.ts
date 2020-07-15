import { NgModule } from '@angular/core';

import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { StudentRoutingModule, routedComponents } from './student-routing.module';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentCourseComponent } from './student-course/student-course.component';
import { StudentProgressComponent } from './student-progress/student-progress.component';
import { StudentProfileComponent } from './Student-profile/student-profile.component';
import {  } from "module";

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    StudentRoutingModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ...routedComponents,
    StudentHomeComponent,
    StudentCourseComponent,
    StudentProgressComponent,
    StudentProfileComponent,
  ],
})

export class StudentModule { }
