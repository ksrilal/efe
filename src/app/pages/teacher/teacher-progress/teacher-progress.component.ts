import { Component, OnInit } from '@angular/core';
import { TeacherProChatService } from "./teacher-pro-chat.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LoginService } from "../../../login/login.service";
import * as moment from 'moment';
import { AngularFireAuth } from '@angular/fire/auth';
import { TeacherProMarksService } from "./teacher-pro-marks.service";

@Component({
  selector: 'ngx-teacher-progress',
  templateUrl: './teacher-progress.component.html',
  styleUrls: ['./teacher-progress.component.scss']
})
export class TeacherProgressComponent implements OnInit {
 
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
      date: {
        title: 'Date',
        type: 'string',
      },
      time: {
        title: 'Time',
        type: 'string',
      },
    },
  };

  source;
  senderData;
  senderMail;
  cuid;
  cname;
  chatData;
  chat;
  time;
  stuData;

  constructor(private TeacherProChatService: TeacherProChatService, private LoginService: LoginService, private TeacherProMarksService: TeacherProMarksService) {

    this.senderMail = localStorage.getItem("mail");
    //console.log("userrrrrrr " + this.user);

    TeacherProChatService.getMy(this.senderMail).subscribe(result => {
      this.source = result;
    });

    TeacherProChatService.getUser(this.senderMail).subscribe(result => {
      this.senderData = result;
    });

   }

  ngOnInit(): void {
  }

  form = new FormGroup({
    msg: new FormControl("", Validators.required),
  });
 
  handleSelected(data) {
    this.cuid = data.data.cuid;
    this.cname = data.data.name;
    this.TeacherProChatService.getChat(this.cuid).subscribe(result => {
      this.chatData = result;
    });
    this.TeacherProMarksService.getStuData(this.cuid).subscribe(result => {
      this.stuData = result;
    }); 
    //this.chat = this.chatData[0]; 
    //console.log("hellooooooooo");
    //console.log(this.chatData);
  }
 
  onSubmit() {

      this.time = Date.now();
      let t = moment(this.time).format('h:mm a, MMMM Do YYYY');
      // console.log("sdddddddddddkjgvshv");
      // console.log(t);
      // console.log("hellooooooooo");
      this.form.value['senderMail'] = this.senderMail;
      this.form.value['sender'] = this.senderData.name;
      this.form.value['time'] = this.time;
      this.form.value['timestring'] = t;


      this.TeacherProChatService.send(this.form.value, this.cuid);
      // console.log("sdddddddddddkjgvshv");
      // console.log(this.time);
      // console.log("hellooooooooo");
      // console.log(this.cuid);

     this.form.reset();

  }

  get msg() {
    return this.form.get("msg");
  }

examForm = new FormGroup({
  examName: new FormControl("", Validators.required),
  des: new FormControl("",),
  marks: new FormControl(0, Validators.required),
});

get examName() {
  return this.examForm.get("examName");
}
get des() {
  return this.examForm.get("des");
}
get marks() {
  return this.examForm.get("marks");
}

}
