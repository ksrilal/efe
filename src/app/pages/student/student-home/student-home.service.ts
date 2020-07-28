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

  getMy(user) {
    return this.afs.collection('stucourses').doc(user).collection('mycourse').valueChanges({idField:"id"});
  }

//to get logged user mail
  
  add(newData, user){
    //console.log(newData.cuid);
    this.afs.collection('stucourses').doc(user).collection('mycourse').add(newData);
  }

}
