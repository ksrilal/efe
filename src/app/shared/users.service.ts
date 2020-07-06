import { Injectable } from '@angular/core';
import { StudentComponent } from '../pages/student/student.component';
import { StudentHomeComponent } from '../pages/student/student-home/student-home.component';
import { StudentProfileComponent } from '../pages/student/student-profile/student-profile.component';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  formData : StudentHomeComponent
  constructor() { }
}
