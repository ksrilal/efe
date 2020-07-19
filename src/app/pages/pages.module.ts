import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { StudentModule } from "./student/student.module";
import { TeacherModule } from "./teacher/teacher.module";
import { AdminModule } from "./admin/admin.module";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StudentHomeService } from "./student/student-home/student-home.service";
import { AdminCoursService } from "./admin/admin-cours.service";
import { AdminStudentService } from "./admin/admin-student.service";
import { AdminTeacherService } from "./admin/admin-teacher.service";
import { from } from 'rxjs';
import { AuthguardService } from "../authguard.service";
import { StudentProChatService } from "./student/student-progress/student-pro-chat.service";

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    StudentModule,
    TeacherModule,
    AdminModule,
    Ng2SmartTableModule
  ],
  declarations: [
    PagesComponent,
  ],

  providers: [
    StudentHomeService,
    AdminCoursService,
    AdminStudentService,
    AdminTeacherService,
    StudentProChatService,
  ]


})
export class PagesModule {
}
