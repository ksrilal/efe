import { Component, OnInit } from '@angular/core';
import { StudentProChatService } from "./student-pro-chat.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LoginService } from "../../../login/login.service";
import * as moment from 'moment';
import { AngularFireAuth } from '@angular/fire/auth';
import { StudentUploadService } from "./student-upload.service";
import { AngularFireStorage } from '@angular/fire/storage';

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
  time;
  upData;

  constructor(private StudentProChatService: StudentProChatService, private LoginService: LoginService, private afStorage: AngularFireStorage, private StudentUploadService: StudentUploadService,) {
    
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
    this.StudentUploadService.getUpload(this.cuid).subscribe(result => {
      this.upData = result;
    });
    //this.chat = this.chatData[0]; 
    //console.log("hellooooooooo");
    //console.log(this.chatData);
  }

  onSubmit() {

      this.time = Date.now();
      let t = moment(this.time).format('h:mm a, MMMM Do YYYY');
      this.form.value['senderMail'] = this.senderMail;
      this.form.value['sender'] = this.senderData.name;
      this.form.value['time'] = this.time;
      this.form.value['timestring'] = t;



      this.StudentProChatService.send(this.form.value, this.cuid);
      // console.log("sdddddddddddkjgvshv");
      // console.log(this.time);
      // console.log("hellooooooooo");
      // console.log(this.cuid);

     this.form.reset();

  }

  subForm = new FormGroup({
    file: new FormControl("", Validators.required),
    des: new FormControl("",),
    name: new FormControl("", Validators.required),
  });

  downloadURL;
  randomId;
  upName;

  upload(event) {
    this.randomId = Math.random()
      .toString(36)
      .substring(2);

    this.afStorage.upload("/upload/" + this.randomId, event.target.files[0]);
  }

  getUpName(val) {
    this.upName = val;
  }

  submit(){

    this.time = Date.now();
      let t = moment(this.time).format('h:mm a, MMMM Do YYYY');
      
      this.subForm.value['time'] = this.time;
      this.subForm.value['timestring'] = t;
      this.subForm.value['uploader'] = "teacher";

      this.downloadURL = this.afStorage
        .ref("/upload/" + this.randomId)
        .getDownloadURL()
        .subscribe(a => {
          this.downloadURL = a;

          // console.log("ane mndaaaaaaaaaaaaaaaaaaaa----->>>")
          // console.log(this.downloadURL);
          // console.log(this.form.value);

          this.subForm.value.file = this.downloadURL;
          this.StudentUploadService.submit(this.subForm.value, this.cuid, this.upName);
        
          this.subForm.reset();
        });
  }

  get msg() {
    return this.form.get("msg");
  }
  get des() {
    return this.subForm.get("des");
  }
  get name() {
    return this.subForm.get("name");
  }


}