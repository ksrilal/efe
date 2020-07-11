import { Component } from '@angular/core';

import {
  student,
  teacher,
  admin,
  all
} from "./pages-menu";

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  menu;

  constructor() {


    var roll = "all";


    console.log(localStorage.getItem("role"));
    //var roll = localStorage.getItem("role");

    if (roll == "student") {
      this.menu = student;
    } else if (roll == "teacher") {
      this.menu = teacher;
    } else if (roll == "admin") {
      this.menu = admin;
    } else if (roll == "all") {
      this.menu = all;
    } 
  }
}
