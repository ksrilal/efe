import { Component, OnInit } from '@angular/core';

import { UsersService } from '../shared/users.service';


class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'ngx-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {
  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
  constructor(public usersService : UsersService) { }
  submitted : boolean;
  showSuccessMessage : boolean ;
  formControls = this.usersService.form.controls;

  ngOnInit(): void {
  }

  onSubmit(){
      this.submitted = true;
      if ( this.usersService.form.valid){
        if(this.usersService.form.get('$id').value==null)
          this.usersService.insertStudents(this.usersService.form.value);
          this.showSuccessMessage = true;
          setTimeout(() => this.showSuccessMessage = false , 3000);
      this.submitted = false;  
      }
  }
} 
