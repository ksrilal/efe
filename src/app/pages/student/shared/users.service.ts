import { Injectable } from '@angular/core';
import { FormControl , FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  form=new FormGroup({
    $id:new FormControl(null),
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    mobile:new FormControl(''),
    email:new FormControl(''),
    homeAddress:new FormControl(''),
    parentName:new FormControl(''),
    parentMobile:new FormControl('') 
  });

}
