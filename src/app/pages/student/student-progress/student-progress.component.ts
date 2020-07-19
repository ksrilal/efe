import { Component, OnInit } from '@angular/core';
import { SmartTableData } from '../../../@core/data/smart-table';
import { LocalDataSource } from 'ng2-smart-table';
import { StudentProChatService } from "./student-pro-chat.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";


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

  source

  constructor(private StudentProChatService: StudentProChatService ) {
    StudentProChatService.getMy().subscribe(result => {
      this.source = result;
    })
  }

  ngOnInit(): void {
  }

  form = new FormGroup({
    msg: new FormControl("", Validators.required),
  });

  onSubmit() {

       // this.AdminCoursService.add(this.form.value);
        
     this.form.reset();

  }

  get msg() {
    return this.form.get("msg");

}
}