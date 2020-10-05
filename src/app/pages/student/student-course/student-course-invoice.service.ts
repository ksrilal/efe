import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { id } from '@swimlane/ngx-charts';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class StudentCourseInvoiceService {

  constructor(private afs: AngularFirestore) { }

  getMy(user) {
    return this.afs.collection('stucourses').doc(user).collection('mycourse').valueChanges({idField:"id"});
  }

  getUser(user) {
    return this.afs.collection('user').doc(user).valueChanges();
  }
  time
  addPaid(user, id, cuid, date, name, temail, time, tname, userName, sid) {

    this.time = Date.now();
    let t = moment(this.time).format('h:mm a, MMMM Do YYYY'); 

    this.afs.collection('stucourses').doc(user).collection('mycourse').doc(id).set({
      id: id,
      cuid: cuid,
      date: date,
      name: name,
      status: "paid",
      temail: temail,
      time: time,
      tname: tname,
    }).then(function() {
        
        alert("Payment successfully Added!");
    })
    .catch(function(error) {
        alert("Something Went Wrong!");
    }); 

    this.afs.collection('invoice').doc(cuid).set({
          time: this.time,
          timeString: t,
          cuid: cuid,
          name: name,
          sname: userName,
          semail: user,
          sid: sid,
          id: id,
        }).then(function() {
        
          console.log("Payment successfully Added!");
      })
      .catch(function(error) {
          console.log("Something Went Wrong!");
      }); 
  }

}
