import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminCoursService } from "../admin-cours.service";
@Component({
  selector: 'ngx-admin-add-course',
  templateUrl: './admin-add-course.component.html',
  styleUrls: ['./admin-add-course.component.scss']
})
export class AdminAddCourseComponent implements OnInit {

  constructor(private AdminCoursService: AdminCoursService) { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    name: new FormControl("", Validators.required),
    cuid: new FormControl("", Validators.required),
    tname: new FormControl("",Validators.required),
    temail: new FormControl("",Validators.required),
    date: new FormControl("",Validators.required),
    time: new FormControl("",Validators.required),
  });

  onSubmit() {

      this.form.value['status'] = "not paid";
      this.AdminCoursService.add(this.form.value);
        
     this.form.reset();

  }

  get name() {
    return this.form.get("name");
  }
  get cuid() {
    return this.form.get("cuid");
  }
  get tname() {
    return this.form.get("tname");
  }
  get temail() {
    return this.form.get("temail");
  }
  get date() {
    return this.form.get("date");
  }
  get time() {
    return this.form.get("time");
  }
}

