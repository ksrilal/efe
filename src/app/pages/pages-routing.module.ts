import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { StudentComponent } from "./student/student.component";
import { AdminGuardService } from "./admin-guard.service";
import { TeacherGuardService } from "./teacher-guard.service";
import { StudentGuardService } from './student-guard.service';


const routes: Routes = [{
  path: "",
  component: PagesComponent,
  children: [
    {
      path: "iot-dashboard",
      component: DashboardComponent
    },
    {
      path: 'student',
      loadChildren: () => import('./student/student.module')
        .then(m => m.StudentModule),
      canActivate: [StudentGuardService]
    },
    {
      path: 'teacher',
      loadChildren: () => import('./teacher/teacher.module')
        .then(m => m.TeacherModule),
        canActivate: [TeacherGuardService]
    },
    {
      path: 'admin',
      loadChildren: () => import('./admin/admin.module')
        .then(m => m.AdminModule),
        canActivate: [AdminGuardService]
    },
    {
      path: "",
      redirectTo: "dashboard",
      pathMatch: "full"
    },
    {
      path: "**",
      component: NotFoundComponent
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
