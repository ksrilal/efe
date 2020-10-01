import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from "firebase/app";

@Injectable({
  providedIn: 'root'
})
export class StudentProChatService {

  constructor(private afs: AngularFirestore) { }

  getMy(user) {
    return this.afs.collection('stucourses').doc(user).collection('mycourse').valueChanges({idField:"id"});
  }

  getUser(user) {
    return this.afs.collection('user').doc(user).valueChanges();
  } 
 
  getChat(cuid) {
    console.log(cuid);
    return this.afs.collection('chat').doc(cuid).collection('msg', ref => ref.orderBy('time')).valueChanges();
  }


  send(data, cuid) {

    this.afs.collection('chat').doc(cuid).collection('msg').add(data);
    // console.log('fuck u ');
    // console.log(data);
    // console.log("csvsjkjcdbvhbdvbshdvbhdvsh");
    // console.log(cuid);

  }



}
