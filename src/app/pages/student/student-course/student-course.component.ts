import { Component, OnInit } from '@angular/core';
import { SmartTableData } from '../../../@core/data/smart-table';
import { LocalDataSource } from 'ng2-smart-table';
import { StudentCourseInvoiceService } from "./student-course-invoice.service";
import { LoginService } from "../../../login/login.service";
import * as moment from 'moment';
import { FormGroup, FormControl, Validators } from "@angular/forms";
 
@Component({
  selector: 'ngx-student-course',
  templateUrl: './student-course.component.html',
  styleUrls: ['./student-course.component.scss']
})
export class StudentCourseComponent {

  settings = {
    actions: {
      add: false,
      delete: false,
      edit: false,
    },
    columns: {
      cuid: {
        title: 'Course Code',
        type: 'number',
      },
      name: {
        title: 'Course Name',
        type: 'string',
      },
      tname: {
        title: 'Tutor',
        type: 'string',
      },
      date: {
        title: 'Day',
        type: 'string',
      },
      time: {
        title: 'Time',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
    },
  };

  source;
  userData;
  userMail;
  cuid;
  cname;
  status;
  paidBlock = false;
  paymentGetwayBlock=false;
  courseBlock = true;
  docId;
  date;
  temail;
  time;
  tname;
  userName;
  userId;

  constructor(private StudentCourseInvoiceService: StudentCourseInvoiceService, private LoginService: LoginService,) {
    this.userMail = localStorage.getItem("mail");

    StudentCourseInvoiceService.getMy(this.userMail).subscribe(result => {
      this.source = result;
    });
    StudentCourseInvoiceService.getUser(this.userMail).subscribe(result => {
      this.userData = result;
      this.userName = this.userData.name;
      this.userId = this.userData.sid;
    });
    
  }

  ngOnInit(): void {
  }

  handleSelected(data) {
    this.cuid = data.data.cuid;
    this.cname = data.data.name;
    this.status = data.data.status;
    this.docId = data.data.id;
    this.date = data.data.date;
    this.temail = data.data.temail;
    this.time = data.data.time;
    this.tname = data.data.tname;

    console.log(data.data);

    if(this.status == "not paid"){
      this.paidBlock = true;
    }
  }

  cancelBlock() {
    this.paidBlock = false;
  }

  payBlock() {
    this.paidBlock = false;
    this.paymentGetwayBlock = true;
    this.courseBlock = false;
  }

  back() {
    this.paymentGetwayBlock = false;
    this.courseBlock = true;
}

pay(){
  if (window.confirm("Are you sure you want to pay this course?")) {
    //console.log(this.userName, this.userId)
    this.StudentCourseInvoiceService.addPaid(this.userMail, this.docId, this.cuid, this.date, this.cname, this.temail, this.time, this.tname, this.userName, this.userId);
  }
  this.paymentGetwayBlock = false;
  this.courseBlock = true;
}

}
