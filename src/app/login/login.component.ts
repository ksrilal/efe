import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from "./login.service";


@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private LoginService: LoginService) { }

  ngOnInit() {}
  form = new FormGroup({
    r_number: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });
  get r_number() {
    return this.form.get("r_number");
  }
  get password() {
    return this.form.get("password");
  }
status = false;
  onSubmit(r_number, password) {
    // tslint:disable-next-line: no-console
    console.log("hello1");
    //this.loginService.SignIn(r_number, password);
    this.LoginService.change();
  } 

}
