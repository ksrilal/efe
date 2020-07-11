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
    e_mail: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });
  get e_mail() {
    return this.form.get("e_mail");
  }
  get password() {
    return this.form.get("password");
  }
  onSubmit(e_mail, password) {
    // tslint:disable-next-line: no-console
    console.log("hello1");
    console.log(password);
    console.log("hello2");
    this.LoginService.SignIn(e_mail, password);
  }

}
