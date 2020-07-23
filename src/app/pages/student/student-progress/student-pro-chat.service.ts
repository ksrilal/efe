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
     
  }

sender
  send(data) {

    this.afs.collection('user').valueChanges({idField: data.fromMail}).subscribe(res=>{this.sender=res;});
    console.log('fuck u '+this.sender);
    // this.afs
    //       .collection("authors")
    //       .doc(data.cuid)
    //       .set(data);
  }



}
