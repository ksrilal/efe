import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { LoginComponent } from "./login/login.component";
import { ApplyregComponent } from "./applyreg/applyreg.component";
import { AuthguardService } from "./authguard.service";

export const routes: Routes = [
  {
    path: "pages",
    loadChildren: () =>
      import("./pages/pages.module").then(m => m.PagesModule),
      canActivate: [AuthguardService]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "applyreg",
    component: ApplyregComponent
  },
  {
    path: "",
    redirectTo: "pages",
    pathMatch: "full",
    canActivate: [AuthguardService]
  },
  { path: "**", redirectTo: "pages",
    canActivate: [AuthguardService]
  },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
