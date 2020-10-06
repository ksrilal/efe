import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class AdminStudentHandleService {
  deleteStudent(email: any) {
    this.afs.collection('student').doc(email).delete();
    this.afs.collection('user').doc(email).delete();
  }
  editStudent(email: any, newData: any) {
    this.afs.collection('student').doc(email).update(newData);
    this.afs.collection('user').doc(email).update(newData);
  }
  getStudents() {
    return this.afs
      .collection("student")
      .valueChanges();
  }

  constructor(private afs: AngularFirestore) { }
}
