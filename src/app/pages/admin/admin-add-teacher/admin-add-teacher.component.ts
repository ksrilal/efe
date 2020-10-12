import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminTeacherService } from '../admin-teacher.service'
import { from } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'ngx-admin-add-teacher',
  templateUrl: './admin-add-teacher.component.html',
  styleUrls: ['./admin-add-teacher.component.scss']
})
export class AdminAddTeacherComponent implements OnInit {

  constructor(private AdminTeacherService: AdminTeacherService, private afStorage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  downloadURL;
  randomId;

  upload(event) {
    this.randomId = Math.random()
      .toString(36)
      .substring(2);

    this.afStorage.upload("/teacher/" + this.randomId, event.target.files[0]);
  }

  form = new FormGroup({
    name: new FormControl("", Validators.required),
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
  });

  onSubmit() {

    this.downloadURL = this.afStorage
      .ref("/teacher/" + this.randomId)
      .getDownloadURL()
      .subscribe(a => {
        this.downloadURL = a;

      this.form.value.pic = this.downloadURL;
      this.form.value['role'] = "teacher";
      this.AdminTeacherService.add(this.form.value);
      
      this.form.reset();
    });
  }

  get email() {
    return this.form.get("email");
  }
  get name() {
    return this.form.get("name");
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


