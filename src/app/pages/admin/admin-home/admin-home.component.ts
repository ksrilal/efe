import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { AdminHomeService } from "./admin-home.service";


@Component({
  selector: 'ngx-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  settings = {
    actions: {
      add: false,
      delete: true,
      edit: false,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true
    },
    columns: {
      fname: {
        title: 'Name',
        type: 'number',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      phone: {
        title: 'Phone',
        type: 'string',
      },
      pname: {
        title: 'Parent Name',
        type: 'string',
      },
      section: {
        title: 'Course Section',
        type: 'string',
      },
    },
  };

  onDeleteConfirm(event): void {
    //console.log(event.data.email);
    if (window.confirm("Are you sure you want to delete?")) {
      this.AdminHomeService.deleteApplications(event.data.email)
    }
  }

  source;

  constructor(private AdminHomeService: AdminHomeService) {
    AdminHomeService.getApplications().subscribe(result => {
      this.source = result;
    }); 
   }

  ngOnInit(): void {
  }

  form = new FormGroup({
    des: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
  });

  get des() {
    return this.form.get("des");
  }
  get name() {
    return this.form.get("name");
  }
  time;
  onSubmit(){

      this.time = Date.now();
      let t = moment(this.time).format('h:mm a, MMMM Do YYYY');
      
      this.form.value['time'] = this.time;
      this.form.value['timestring'] = t;
      this.AdminHomeService.send(this.form.value);
      this.form.reset();
  }
  
  
}
