import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-admin-course-handle',
  templateUrl: './admin-course-handle.component.html',
  styleUrls: ['./admin-course-handle.component.scss']
})
export class AdminCourseHandleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    cuid: new FormControl("", Validators.required),
  });

  // form1 = new FormGroup({
  //   name: new FormControl("", Validators.required),
  //   tname: new FormControl("",Validators.required),
  //   temail: new FormControl("",Validators.required),
  //   date: new FormControl("",Validators.required),
  //   time: new FormControl("",Validators.required),
  // });

  onSubmit() {
    
  }

  get cuid() {
    return this.form.get("cuid");
  }

}
