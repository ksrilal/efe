import { Component, OnInit } from '@angular/core';
import { TeacherProfileService } from "./teacher-profile.service";

@Component({
  selector: 'ngx-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.scss']
})
export class TeacherProfileComponent implements OnInit {
  senderMail;
  userData;

  constructor(private TeacherProfileService: TeacherProfileService) {
    this.senderMail = localStorage.getItem("mail");

    TeacherProfileService.getUser(this.senderMail).subscribe(result => {
      this.userData = result;
    });
   }

  ngOnInit(): void {
  }

}
