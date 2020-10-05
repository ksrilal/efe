import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  deleteAnounce(val: any) {
    this.afs.collection('anouncements').doc(val).delete();
  }
  getAnouncement() {
    return this.afs.collection('anouncements').valueChanges();
  }
  commentDelete(pemail: any, cemail: any, comment: any) {
    this.afs.collection('posts').doc(pemail).collection('comment').doc(cemail).delete();
    this.afs.collection('posts').doc(pemail).update({comment: comment});
  }
  getComment(email: any) {
    return this.afs.collection('posts').doc(email).collection('comment', ref => ref.orderBy('time')).valueChanges();
  }
  addComment(userMail: any, email: any, value: any, comment: any) {
    this.afs.collection('posts').doc(email).collection('comment').doc(userMail).set(value);
    this.afs.collection('posts').doc(email).update({comment: comment});
  }
  likePost(like: any, email: any) {
    this.afs.collection('posts').doc(email).update({like: like});
  }
  postDelete(tempMail: any) {
    this.afs.collection('posts').doc(tempMail).delete();
  }
  postEdit(value: any, userMail: any) {
    this.afs.collection('posts').doc(userMail).update({post: value.edit});
  }

  postSend(value: any, userMail: any) {
    this.afs.collection('posts').doc(userMail).set(value);
  }

  getPost() {
    return this.afs.collection('posts', ref => ref.orderBy('time')).valueChanges();
  }

  constructor(private afs: AngularFirestore) { }

  getUser(user) {
    return this.afs.collection('user').doc(user).valueChanges();
  }

  getCourses() {
    return this.afs.collection('courses').valueChanges();
  }
}
