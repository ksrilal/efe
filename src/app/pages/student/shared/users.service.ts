import { Injectable } from '@angular/core';
import { FormControl , FormGroup ,Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  form=new FormGroup({
    $id:new FormControl(null),
    firstName:new FormControl('' , Validators.required),
    lastName:new FormControl('' , Validators.required),
    mobile:new FormControl('' , Validators.minLength(10)),
    email:new FormControl('' , Validators.email),
    homeAddress:new FormControl('' , Validators.required),
    parentName:new FormControl('' , Validators.required),
    parentMobile:new FormControl('' , [Validators.required , Validators.minLength(10)]) 
  });

}
