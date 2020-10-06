import { Component, OnInit } from '@angular/core';
import { AdminTeacherHandleService } from "./admin-teacher-handle.service";
@Component({
  selector: 'ngx-admin-teacher-handle',
  templateUrl: './admin-teacher-handle.component.html',
  styleUrls: ['./admin-teacher-handle.component.scss']
})
export class AdminTeacherHandleComponent implements OnInit {

  constructor(private AdminTeacherHandleService: AdminTeacherHandleService,) { 
    AdminTeacherHandleService.getTeachers().subscribe(result => {
      this.source = result;
    });
  }
  source;

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
      des: {
        title: "Description",
        type: "string"
      },
    }
  };

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      this.AdminTeacherHandleService.deleteTeacher(event.data.email);
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event): void {
    if (
      event.newData.name != "" &&
      event.newData.des != "" &&
      event.newData.mobile != "" &&
      event.newData.mobile.length == 10 &&
      !event.newData.mobile.match(/[a-z]/i)
    ) {
      if (window.confirm("Are you sure you want to edit?")) {
        this.AdminTeacherHandleService.editTeacher(event.data.email, event.newData);
      } else {
        event.confirm.reject();
      }
    } else {
      alert("ERROR!");
    }
  }

  ngOnInit(): void {
  }

}
