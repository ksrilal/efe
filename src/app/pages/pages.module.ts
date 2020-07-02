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
import { StudentHomeService } from "./student/student-home/student-home.service";

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
    AdminModule
  ],
  declarations: [
    PagesComponent,
  ],
  providers: [StudentHomeService]

})
export class PagesModule {
}
