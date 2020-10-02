import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TeacherProMarksService {

  constructor(private afs: AngularFirestore) { }

  getStuData(cuid) {
    //console.log(cuid);
    return this.afs.collection('courseStu').doc(cuid).collection('students').valueChanges(); 
  }

}
