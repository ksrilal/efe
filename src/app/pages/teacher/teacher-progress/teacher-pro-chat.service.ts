import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TeacherProChatService {

  constructor(private afs: AngularFirestore) { }

  getMy(user) {
    return this.afs.collection('courses', ref => ref.where('temail', '==', user)).valueChanges();
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
