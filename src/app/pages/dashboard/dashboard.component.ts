import {Component, OnDestroy} from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import * as moment from 'moment';
import { DashboardService } from "./dashboard.service";

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {

  userMail;
  userData;
  time;
  postData;

  constructor(private DashboardService: DashboardService, ) {
    this.userMail = localStorage.getItem("mail");

    DashboardService.getUser(this.userMail).subscribe(result => {
      this.userData = result;
    });

    DashboardService.getPost().subscribe(result => {
      this.postData = result;
    });

  }

  form = new FormGroup({
    post: new FormControl("", Validators.required),
  });

  get post() {
    return this.form.get("post");
  }
 
  postSubmit() {

    this.time = Date.now();
    let t = moment(this.time).format('h:mm a, MMMM Do YYYY');

    this.form.value['email'] = this.userMail;
    this.form.value['name'] = this.userData.name;
    this.form.value['pic'] = this.userData.pic;
    this.form.value['time'] = this.time;
    this.form.value['timestring'] = t;
    this.form.value['like'] = 0;
    this.form.value['comment'] = 0;

    this.DashboardService.postSend(this.form.value, this.userMail);

    this.form.reset(); 
}

formEdit = new FormGroup({
  edit: new FormControl("", Validators.required),
});

get edit() {
  return this.form.get("edit");
}

postEdit() {
  //console.log(this.formEdit.value);
  if(window.confirm("Do You Want Update?")) {
    this.DashboardService.postEdit(this.formEdit.value, this.tempMail);
    this.form.reset();
    this.postEditBlock = false;
  }
}

postEditBlock = false;
tempPost;
tempMail;
editPostOpen(email, post) {
  if(this.userMail == email || this.userData.role == 'admin'){
    this.postEditBlock = true;
    this.tempPost = post;
    this.tempMail = email;
  }
}
editPostClose() {
  this.postEditBlock = false;
}

deletePost(email) {
  if(this.userMail == email || this.userData.role == 'admin'){
    this.tempMail = email;
    if(window.confirm("Do You Want Delete?")) {
      this.DashboardService.postDelete(this.tempMail);
    }
  }
}

likePost(email, like){
  like += 1;
  //console.log(like);
  //console.log(email);
  this.DashboardService.likePost(like, email);
}

commentData;
addComment(email, comment) {
  comment += 1;
  this.time = Date.now();
    let t = moment(this.time).format('h:mm a, MMMM Do YYYY');

    this.formEdit.value['email'] = this.userMail;
    this.formEdit.value['name'] = this.userData.name;
    this.formEdit.value['pic'] = this.userData.pic;
    this.formEdit.value['time'] = this.time;
    this.formEdit.value['timestring'] = t;
    this.formEdit.value['like'] = 0;
  this.DashboardService.addComment(this.userMail, email, this.formEdit.value, comment);

  // this.DashboardService.getComment(email).subscribe(result => {
  //   this.commentData = result;
  // });

}

commentBlock;
commentBlockMail(email) {
  this.commentBlock = email; 
  this.DashboardService.getComment(email).subscribe(result => {
    this.commentData = result;
  });
}

deleteComment(pemail, cemail, comment) {
  comment -= 1;
  if(window.confirm("Do You Want Delete?")) {
    this.DashboardService.commentDelete(pemail, cemail, comment);
  }
}

  ngOnDestroy() {
  }
}
