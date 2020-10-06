import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from "firebase/app";

@Injectable({
  providedIn: 'root'
})
export class AdminCoursService {

  constructor(private afs: AngularFirestore) { }

  add(data){
    this.afs.collection('courses').doc(data.cuid).set(data);
  }
}
