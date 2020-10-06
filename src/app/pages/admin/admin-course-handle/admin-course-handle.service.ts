import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class AdminCourseHandleService {
  editCourse(cuid: any, newData: any) {
    this.afs.collection('courses').doc(cuid).update(newData);
  }
  deleteCourse(cuid: any) {
    this.afs.collection('courses').doc(cuid).delete();
  }
  getCourses() {
    return this.afs
    .collection("courses")
    .valueChanges();  
  }

  constructor(private afs: AngularFirestore) { }
}
