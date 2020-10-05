import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from "firebase/app";
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class StudentHomeService {
  deleteMyCourse(user: any, cuid: any) {
    this.afs.collection('stucourses').doc(user).collection('mycourse').doc(cuid).delete();
 }

  constructor(private afs: AngularFirestore) { }

  getAll() {
    return this.afs.collection('courses').valueChanges({idField:"id"});
  }

  getMy(user) {
    return this.afs.collection('stucourses').doc(user).collection('mycourse').valueChanges({idField:"id"});
  }
 
  getMyDetails() {
    return this.afs.collection('student').valueChanges({idField:"id"});
  }

//to get logged user mail
  time
  add(newData, user, cuid, username, sid){
    //console.log(newData.cuid);
    this.time = Date.now();
    let t = moment(this.time).format('h:mm a, MMMM Do YYYY'); 
    this.afs.collection('stucourses').doc(user).collection('mycourse').doc(cuid).set(newData);
    this.afs.collection('courseStu').doc(cuid).collection('students').doc(user).set({
      name: username,
      sid: sid,
      email: user, 
      status: "not paid",
      time: this.time,
      timeString: t,
  });
  }

}
