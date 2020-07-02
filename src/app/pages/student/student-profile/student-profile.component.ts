import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {
  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
  constructor() { }

  ngOnInit(): void {
  }

  inputFile;
  filename = 'Profile Photo';
  uid;
  photoURL = '../../assets/images/default-profile.jpg';

}
