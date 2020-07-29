import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service'; 


@Component({
  selector: 'ngx-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  constructor(public usersService : UsersService) { }

  ngOnInit(): void {
    this.usersService.getStudents();
  }

}
