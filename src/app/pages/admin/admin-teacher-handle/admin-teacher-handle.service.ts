import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class AdminTeacherHandleService {
  editTeacher(email: any, newData: any) {
    this.afs.collection('teacher').doc(email).update(newData);
    this.afs.collection('user').doc(email).update(newData);
  }
  deleteTeacher(email: any) {
    this.afs.collection('teacher').doc(email).delete();
    this.afs.collection('user').doc(email).delete();  
  }
  getTeachers() {
    return this.afs
      .collection("teacher")
      .valueChanges();
  }

  constructor(private afs: AngularFirestore) { }
}
