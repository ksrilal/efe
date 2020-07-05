import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { tap } from 'rxjs/operators';
import { LoginService } from "./login/login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private authService: NbAuthService,  private router: Router, private LoginService: LoginService ) { 
    
  }

  canActivate() :boolean {
    
    if(this.LoginService.status==true){
      console.log("true");
      return true;
    }else {
      console.log("false");
      return false;
    }
  }

  // canActivate() {
  //   return this.authService.isAuthenticated()
  //     .pipe(
  //       tap(authenticated => {
  //         if (!authenticated) {
  //           this.router.navigate(['auth/login']);
  //         }
  //       }),
  //     );
  // }

}
