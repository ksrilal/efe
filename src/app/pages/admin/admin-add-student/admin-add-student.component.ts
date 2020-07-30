import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminStudentService } from '../admin-student.service'
import { from } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'ngx-admin-add-student',
  templateUrl: './admin-add-student.component.html',
  styleUrls: ['./admin-add-student.component.scss']
})

export class AdminAddStudentComponent implements OnInit {

  constructor(private AdminStudentService: AdminStudentService, private afStorage: AngularFireStorage) { }

  ngOnInit(): void {
  }
  
  downloadURL;
  randomId;

  upload(event) {
    this.randomId = Math.random()
      .toString(36)
      .substring(2);

    this.afStorage.upload("/student/" + this.randomId, event.target.files[0]);
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
    pname: new FormControl("", Validators.required),
    pmobile: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ]),
    address: new FormControl("", Validators.required),
  });

  onSubmit() {

    this.downloadURL = this.afStorage
      .ref("/student/" + this.randomId)
      .getDownloadURL()
      .subscribe(a => {
        this.downloadURL = a;

        // console.log("ane mndaaaaaaaaaaaaaaaaaaaa----->>>")
        // console.log(this.downloadURL);
        // console.log(this.form.value);

      this.form.value.pic = this.downloadURL;
      this.form.value['role'] = "student";
      this.AdminStudentService.add(this.form.value);
    
      this.form.reset();
});
}

  get email() {
    return this.form.get("email");
  }
  get name() {
    return this.form.get("name");
  }
  get pname() {
    return this.form.get("pname");
  }
  get password() {
    return this.form.get("password");
  }
  get mobile() {
    return this.form.get("mobile");
  }
  get pmobile() {
    return this.form.get("pmobile");
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
  get address() {
    return this.form.get("address");
  }
}
