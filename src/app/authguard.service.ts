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

  canActivate() {
    var roleType = localStorage.getItem("role");

    if (this.LoginService.isAuthenticated && roleType != null) {
      console.log("user is  authenticated");

      return true;
    } else {
      console.log("user is not authenticated");
      this.router.navigate(["/login"]);

      return false;
    }
 }

}
