import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { id } from '@swimlane/ngx-charts';


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

  addPaid(user, id, cuid, date, name, temail, time, tname) {
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
  }

}
