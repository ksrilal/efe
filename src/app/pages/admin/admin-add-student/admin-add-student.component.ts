import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { AngularFireStorage } from '@angular/fire/storage';
import { from } from 'rxjs';
//import * as firebase from 'firebase/app';

@Component({
  selector: 'ngx-admin-add-student',
  templateUrl: './admin-add-student.component.html',
  styleUrls: ['./admin-add-student.component.scss']
})

export class AdminAddStudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    //userName: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
    lname: new FormControl("", Validators.required),
    des: new FormControl("", Validators.required),
    pic: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
    ]),
    mobile: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ]),
    confirmPassword: new FormControl("", [
      Validators.required, Validators.minLength(8),
    ]),
    gender: new FormControl("", Validators.required),
    // latitude: new FormControl(""),
    // longitude: new FormControl(""),
  });

  get email() {
    return this.form.get("email");
  }
  get name() {
    return this.form.get("name");
  }
  get lname() {
    return this.form.get("lname");
  }
  get password() {
    return this.form.get("password");
  }
  get mobile() {
    return this.form.get("mobile");
  }
  get des() {
    return this.form.get("des");
  }
  get pic() {
    return this.form.get("pic");
  }
  get confirmPassword() {
    return this.form.get("confirmPassword");
  }
  get gender() {
    return this.form.get("gender");
  }
}
