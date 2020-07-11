import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApplyregService } from "./applyreg.service";


@Component({
  selector: 'ngx-applyreg',
  templateUrl: './applyreg.component.html',
  styleUrls: ['./applyreg.component.scss']
})
export class ApplyregComponent implements OnInit {

  constructor(private ApplyregService: ApplyregService) { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    fname: new FormControl("", Validators.required),
    pname: new FormControl("", Validators.required),
    section: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ]),
  });

  get email() {
    return this.form.get("email");
  }
  get fname() {
    return this.form.get("fname");
  }
  get pname() {
    return this.form.get("pname");
  }
  get phone() {
    return this.form.get("phone");
  }
  get section() {
    return this.form.get("section");
  }


  onSubmit() {
    this.ApplyregService.create(this.form.value);   
    this.form.reset();
  }

}
