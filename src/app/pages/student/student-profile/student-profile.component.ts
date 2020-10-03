import { Component, OnInit } from '@angular/core';
import { TeacherProfileService } from "../../teacher/teacher-profile/teacher-profile.service";


class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'ngx-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {
  senderMail;
  userData;

  constructor(private UserService: TeacherProfileService) {
    this.senderMail = localStorage.getItem("mail");

    UserService.getUser(this.senderMail).subscribe(result => {
      this.userData = result;
    });
   }

  ngOnInit(): void {
  }

}
