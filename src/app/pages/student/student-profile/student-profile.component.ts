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
  formControls = this.usersService.form.controls;

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('sxscscscsc');

    // else
      //update
      this.submitted = true;
      if ( this.usersService.form.valid){
      // if(this.userService.form.get('$id').value==null)
      //insert
      this.submitted = false;  
      }
  }


} 
