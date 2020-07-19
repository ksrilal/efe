import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from "firebase/app";

@Injectable({
  providedIn: 'root'
})
export class StudentProChatService {

  constructor(private afs: AngularFirestore) { }

  getMy() {
    return this.afs.collection('mycourses').valueChanges({idField:"id"});
  }

  getChat() {
    return 
  }

  send() {
    
  }



}
