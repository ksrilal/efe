import { Component, OnInit } from '@angular/core';
import { SmartTableData } from '../../../@core/data/smart-table';
import { LocalDataSource } from 'ng2-smart-table';
import { StudentProChatService } from "./student-pro-chat.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LoginService } from "../../../login/login.service";
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
      custom: [
        {
          name: 'view',
          title: '<i class="fas fa-comment" title="Chat!"></i>'
        },
      ],
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
    },
  };

  source;
  fromMail;
  toMail;
  fromName;
  ToName;
  Time;
  cuid;

  constructor(private StudentProChatService: StudentProChatService, private LoginService: LoginService, ) {
    StudentProChatService.getMy().subscribe(result => {
      this.source = result;
    })

    LoginService.getMail().then( usermail => this.fromMail = usermail.email );

  }

  ngOnInit(): void {
  }

  form = new FormGroup({
    msg: new FormControl("", Validators.required),
  });

  onSubmit() {

      this.form.value['fromMail'] = this.fromMail;
      this.form.value['toMail'] = this.toMail;
      this.form.value['fromName'] = this.fromName;
      this.form.value['toName'] = this.ToName;
      this.form.value['time'] = this.Time;

      this.StudentProChatService.send(this.form.value);
      console.log("hello" + this.fromMail);

     this.form.reset();

  }

  get msg() {
    return this.form.get("msg");

}


}