import { NgModule } from '@angular/core';

import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { AdminRoutingModule, routedComponents } from "./admin-routing.module";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AdminComponent } from "./admin.component";
import { AdminCourseHandleComponent } from "./admin-course-handle/admin-course-handle.component";
import { AdminPaymentHandleComponent } from "./admin-payment-handle/admin-payment-handle.component";
import { AdminStudentHandleComponent } from "./admin-student-handle/admin-student-handle.component";
import { AdminTeacherHandleComponent } from "./admin-teacher-handle/admin-teacher-handle.component";
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    AdminRoutingModule,
    
  ],
  declarations: [
    ...routedComponents,
    AdminHomeComponent,
    AdminComponent,
    AdminCourseHandleComponent,
    AdminPaymentHandleComponent,
    AdminStudentHandleComponent,
    AdminTeacherHandleComponent,
    AdminProfileComponent
  ],
})

export class AdminModule { }
