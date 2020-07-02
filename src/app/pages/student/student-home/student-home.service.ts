import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from "firebase/app";

@Injectable({
  providedIn: 'root'
})
export class StudentHomeService {

  constructor(private afs: AngularFirestore) { }

  getAll() {
    return this.afs.collection('courses').valueChanges({idField:"id"});
  }

  getMy() {
    return this.afs.collection('mycourses').valueChanges({idField:"id"});
  }
}
