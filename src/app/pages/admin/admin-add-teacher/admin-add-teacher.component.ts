import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminTeacherService } from '../admin-teacher.service'
import { from } from 'rxjs';

@Component({
  selector: 'ngx-admin-add-teacher',
  templateUrl: './admin-add-teacher.component.html',
  styleUrls: ['./admin-add-teacher.component.scss']
})
export class AdminAddTeacherComponent implements OnInit {

  constructor(private AdminTeacherService: AdminTeacherService) { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    tname: new FormControl("", Validators.required),
    tlname: new FormControl("", Validators.required),
    tdes: new FormControl("", Validators.required),
    tpic: new FormControl("", Validators.required),
    temail: new FormControl("", [Validators.required, Validators.email]),
    tpassword: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
    ]),
    tmobile: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ]),
    tconfirmPassword: new FormControl("", [
      Validators.required, Validators.minLength(8),
    ]),
    tgender: new FormControl("", Validators.required),
  });

  onSubmit() {

    this.AdminTeacherService.add(this.form.value);
    this.form.reset();
  }

  get temail() {
    return this.form.get("temail");
  }
  get tname() {
    return this.form.get("tname");
  }
  get tlname() {
    return this.form.get("tlname");
  }
  get tpassword() {
    return this.form.get("tpassword");
  }
  get tmobile() {
    return this.form.get("tmobile");
  }
  get tdes() {
    return this.form.get("tdes");
  }
  get tpic() {
    return this.form.get("tpic");
  }
  get tconfirmPassword() {
    return this.form.get("tconfirmPassword");
  }
  get tgender() {
    return this.form.get("tgender");
  }
}


