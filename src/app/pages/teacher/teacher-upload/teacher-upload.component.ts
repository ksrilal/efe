import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../../file-upload.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from "../../../login/login.service";
import * as moment from 'moment';
import { AngularFireAuth } from '@angular/fire/auth';
import { TeacherProChatService } from "../teacher-progress/teacher-pro-chat.service";
import { TeacherUploadService } from "./teacher-upload.service";
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'ngx-teacher-upload',
  templateUrl: './teacher-upload.component.html',
  styleUrls: ['./teacher-upload.component.scss']
})
export class TeacherUploadComponent implements OnInit {
 
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

  profileForm: FormGroup;
  error: string;
  teacherMail;
  cuid;
  cname;
  source;
  teacherData;
  time;
  tag = "teacher";

  fileUpload = {status: '', message: '', filePath: ''};

  constructor(private fb: FormBuilder, private LoginService: LoginService, private afStorage: AngularFireStorage, private TeacherProChatService: TeacherProChatService, private TeacherUploadService: TeacherUploadService) {

    this.teacherMail = localStorage.getItem("mail");
    //console.log("userrrrrrr " + this.user);
    TeacherProChatService.getMy(this.teacherMail).subscribe(result => {
      this.source = result;
    });

    TeacherProChatService.getUser(this.teacherMail).subscribe(result => {
      this.teacherData = result;
    });

   }


  ngOnInit(): void {
    
  }
  downloadURL;
  randomId;
  upData;
  subData;

  upload(event) {
    this.randomId = Math.random()
      .toString(36)
      .substring(2);

    this.afStorage.upload("/upload/" + this.randomId, event.target.files[0]);
  }

  form = new FormGroup({
    file: new FormControl("", Validators.required),
    des: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
  });
 
  get des() {
    return this.form.get("des");
  }
  get name() {
    return this.form.get("name");
  }

  handleSelected(data) {
    this.cuid = data.data.cuid;
    this.cname = data.data.name;
    this.subData = null;
    this.TeacherUploadService.getUpload(this.cuid).subscribe(result => {
      this.upData = result;
    });
    console.log(this.upData.id);
    //console.log(this.cuid);
  }



  onSubmit(){

    this.time = Date.now();
      let t = moment(this.time).format('h:mm a, MMMM Do YYYY');
      
      this.form.value['time'] = this.time;
      this.form.value['timestring'] = t;
      this.form.value['uploader'] = "teacher";

      this.downloadURL = this.afStorage
        .ref("/upload/" + this.randomId)
        .getDownloadURL()
        .subscribe(a => {
          this.downloadURL = a;

          // console.log("ane mndaaaaaaaaaaaaaaaaaaaa----->>>")
          // console.log(this.downloadURL);
          // console.log(this.form.value);

          this.form.value.file = this.downloadURL;
          this.TeacherUploadService.send(this.form.value, this.cuid, this.form.value.name);
        
          this.form.reset();
        });
  }

  getSubData(val) {
    this.TeacherUploadService.getSubData(this.cuid, val).subscribe(result => {
      this.subData = result;
    });
    //console.log(val);
    //console.log("ane mndaaaaaaaaaaaaaaaaaaaa----->>>");
  }

  upDelete(val) {
    console.log(val);
    this.TeacherUploadService.upDelete(this.cuid, val);
  }

}
