import { Component, OnInit } from '@angular/core';
import { SmartTableData } from '../../../@core/data/smart-table';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'ngx-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent {

 // constructor() { }

  settings = {
    actions: {
      add: false,
      delete: false,
      edit: false,
      custom: [
        {
          name: 'view',
          title: '<i class="fas fa-book-reader" title="VIEW"></i>'
        },
      ],
    },
    columns: {
      id: {
        title: 'Course Code',
        type: 'number',
      },
      firstName: {
        title: 'Course Name',
        type: 'string',
      },
      lastName: {
        title: 'Tutor Name',
        type: 'string',
      },
      // username: {
      //   title: 'Username',
      //   type: 'string',
      // },
      // email: {
      //   title: 'E-mail',
      //   type: 'string',
      // },
      // age: {
      //   title: 'Age',
      //   type: 'number',
      // },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit(): void {
  }

}
