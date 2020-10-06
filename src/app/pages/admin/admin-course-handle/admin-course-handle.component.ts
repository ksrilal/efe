import { Component, OnInit } from '@angular/core';
import { AdminCourseHandleService } from "./admin-course-handle.service";

@Component({
  selector: 'ngx-admin-course-handle',
  templateUrl: './admin-course-handle.component.html',
  styleUrls: ['./admin-course-handle.component.scss']
})
export class AdminCourseHandleComponent implements OnInit {

  constructor(private AdminCourseHandleService: AdminCourseHandleService,) { 
    AdminCourseHandleService.getCourses().subscribe(result => {
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
      cuid: {
        title: "CID",
        type: "string",
        editable: false,
      },
      name: {
        title: "Name",
        type: "string",
      },
      tname: {
        title: "Tutor Name",
        type: "string"
      },
      temail: {
        title: "Tutor E-mail",
        type: "string",
      },
      date: {
        title: "Day",
        type: "string"
      },
      time: {
        title: "Time",
        type: "string"
      },
    }
  };

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      this.AdminCourseHandleService.deleteCourse(event.data.cuid);
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event): void {
    if (
      event.newData.name != "" &&
      event.newData.tname != "" &&
      event.newData.date != "" &&
      event.newData.time != "" &&
      event.newData.temail != "" &&
      event.newData.temail.includes("@") &&
      event.newData.temail.includes(".com") 
    ) {
      if (window.confirm("Are you sure you want to edit?")) {
        this.AdminCourseHandleService.editCourse(event.data.cuid, event.newData);
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
