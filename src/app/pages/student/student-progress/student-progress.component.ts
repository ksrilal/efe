import { Component, OnInit } from '@angular/core';
import { StudentProChatService } from "./student-pro-chat.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LoginService } from "../../../login/login.service";
import * as moment from 'moment';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'ngx-student-progress',
  templateUrl: './student-progress.component.html',
  styleUrls: ['./student-progress.component.scss']
})
export class StudentProgressComponent implements OnInit {

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
      tid: {
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
  senderData;
  senderMail;
  cuid;
  cname;
  chatData;
  chat;
  time

  constructor(private StudentProChatService: StudentProChatService, private LoginService: LoginService, ) {
    
    this.senderMail = localStorage.getItem("mail");
    //console.log("userrrrrrr " + this.user);

    StudentProChatService.getMy(this.senderMail).subscribe(result => {
      this.source = result;
    });

    StudentProChatService.getUser(this.senderMail).subscribe(result => {
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
    this.StudentProChatService.getChat(this.cuid).subscribe(result => {
      this.chatData = result;
    });
    //this.chat = this.chatData[0]; 
    //console.log("hellooooooooo");
    //console.log(this.chatData);
  }

  onSubmit() {

      this.time = Date.now();
      this.form.value['senderMail'] = this.senderMail;
      this.form.value['sender'] = this.senderData.name;
      this.form.value['time'] = this.time;

      //ටයිම් එක හදලා නෑ යකෝ ඒක හදපන් සෙද්ද....

      this.StudentProChatService.send(this.form.value, this.cuid);
      // console.log("sdddddddddddkjgvshv");
      // console.log(this.time);
      // console.log("hellooooooooo");
      // console.log(this.cuid);

     this.form.reset();

  }

  get msg() {
    return this.form.get("msg");

}


}