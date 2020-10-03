import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class TeacherProfileService {

  constructor(private afs: AngularFirestore) { }

  getUser(user) {
    return this.afs.collection('user').doc(user).valueChanges();
  }
}
