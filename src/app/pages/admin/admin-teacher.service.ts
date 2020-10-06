import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';
import * as firebase from "firebase/app";
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AdminTeacherService {

  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) {
    var config = {
      apiKey: "AIzaSyBwKnQyDLw1QWZeHU74NQLWNXGC903dlIw",
      authDomain: "e-for-e.firebaseapp.com",
      databaseURL: "https://e-for-e.firebaseio.com",
    };
    this.secondaryApp = firebase.initializeApp(config, "Secondary");
  }

  secondaryApp;

  add(data){  
    this.secondaryApp
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then(firebaseUser => {
      console.log("User " + firebaseUser.user.uid + " created successfully!");
      alert("Added Successfully");

      this.afs
          .collection("teacher")
          .doc(firebaseUser.user.email)
          .set(data);
      this.afs
          .collection("user")
          .doc(firebaseUser.user.email)
          .set(data);
        this.secondaryApp.auth().signOut();
      })
      .catch(err => {
        console.log("HELL" + err.message);
        alert(err.message);
      });

    //this.afs.collection('teacher').add(data);
  }
}
