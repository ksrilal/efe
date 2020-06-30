import { NgModule } from '@angular/core';

import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { StudentRoutingModule, routedComponents } from './student-routing.module';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentCourseComponent } from './student-course/student-course.component';
import { StudentProgressComponent } from './student-progress/student-progress.component';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    StudentRoutingModule
  ],
  declarations: [
    ...routedComponents,
    StudentHomeComponent,
    StudentCourseComponent,
    StudentProgressComponent,
  ],
})

export class StudentModule { }
