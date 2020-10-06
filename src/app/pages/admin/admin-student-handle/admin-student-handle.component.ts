import { Component, OnInit } from '@angular/core';
import { AdminStudentHandleService } from "./admin-student-handle.service";

@Component({
  selector: 'ngx-admin-student-handle',
  templateUrl: './admin-student-handle.component.html',
  styleUrls: ['./admin-student-handle.component.scss']
})
export class AdminStudentHandleComponent implements OnInit {

  constructor(private AdminStudentHandleService: AdminStudentHandleService,) {
    AdminStudentHandleService.getStudents().subscribe(result => {
      this.source = result;
    });
   }

  ngOnInit(): void {
  }

  settings = {
    actions: {
      add: false
    },

    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true
    },
    columns: {
      sid: {
        title: "SID",
        type: "string",
        editable: false,
      },
      name: {
        title: "Name",
        type: "string"
      },
      gender: {
        title: "Gender",
        type: "string",
        editable: false,
      },
      mobile: {
        title: "Phone",
        type: "string"
      },
      email: {
        title: "E-mail",
        type: "string",
        editable: false,
      },
      pname: {
        title: "Parent Name",
        type: "string"
      },
      pmobile: {
        title: "Parent Phone",
        type: "string"
      },
      des: {
        title: "Description",
        type: "string"
      },
    }
  };

  source;

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      this.AdminStudentHandleService.deleteStudent(event.data.email);
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event): void {
    if (
      event.newData.name != "" &&
      event.newData.pname != "" &&
      event.newData.des != "" &&
      event.newData.mobile != "" &&
      event.newData.mobile.length == 10 &&
      !event.newData.mobile.match(/[a-z]/i) &&
      event.newData.pmobile != "" &&
      event.newData.pmobile.length == 10 &&
      !event.newData.pmobile.match(/[a-z]/i) 
    ) {
      if (window.confirm("Are you sure you want to edit?")) {
        this.AdminStudentHandleService.editStudent(event.data.email, event.newData);
      } else {
        event.confirm.reject();
      }
    } else {
      alert("ERROR!");
    }
  }

}
