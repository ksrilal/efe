import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.scss']
})
export class TeacherProfileComponent implements OnInit {
  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';

  constructor() { }

  ngOnInit(): void {
  }
  inputFile;
  filename = '';
  uid;
  photoURL = '../../assets/images/default-profile.jpg';

}
