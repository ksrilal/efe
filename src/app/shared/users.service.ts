import { Injectable } from '@angular/core';
// import { StudentComponent } from '../pages/student/student.component';
// import { StudentHomeComponent } from '../pages/student/student-home/student-home.component';
// import { StudentProfileComponent } from '../pages/student/student-profile/student-profile.component';
import { Users } from './users.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export class UsersService {

formData = new FormGroup({
id : new FormControl(''),
firstName : new FormControl('',Validators.required),
lastName : new FormControl('',Validators.required)
})



  constructor() { }
}
