import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from "firebase/app";
import { AngularFireAuth } from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminStudentService {

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
          .collection("student")
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

    //this.afs.collection('student').doc(data.email).set(data);
  }
}
