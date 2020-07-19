import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import * as firebase from "firebase";
@Injectable({
  providedIn: 'root' 
})
export class LoginService {
  userData: Observable<firebase.User>;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore) {
      this.userData = angularFireAuth.authState;
     }

     isLoggedIn() {
      console.log(this.angularFireAuth.currentUser);
      return this.angularFireAuth.currentUser;
    }

    // isAdmin() {
    //   return (
    //     this.angularFireAuth.auth.currentUser.email === ""
    //   );
    // }

    isAuthenticated() {
      if (this.angularFireAuth.currentUser != null) {
        console.log(this.angularFireAuth.currentUser);
        return true;
      } else {
        return false;
      }
    }

    getMail() {
      return this.angularFireAuth.currentUser;
    }

    SignIn(email: string, password: string) {
      this.afs
        .collection("student", ref => ref.where("email", "==", email))
        .snapshotChanges()
        .subscribe(res => {
          if (res.length > 0) {
            console.log("doocument exist");
  
            this.afs
              .collection("student")
              .doc(email)
              .valueChanges()
              .subscribe(val => {
                // console.log(val);
                localStorage.setItem("role", val["role"]);
                localStorage.setItem("mail", email);
                console.log(localStorage.getItem("role"));
                console.log(localStorage.getItem("mail"));
              });
  
            this.angularFireAuth.signInWithEmailAndPassword(email, password)
              .then(res => {

                console.log("You are successfully logged in");
                localStorage.setItem("userId", res.user.uid);
                console.log(localStorage.getItem("userId"));
  
                this.router.navigate(["/pages/iot-dashboard"]);
              })
              .catch(err => {
                window.alert(err.message)
                console.log("Something is wrong", err.message);
              });
          } else {
            console.log("no document");
          }
        });
    }

    resetPassword(email: string) {
      const fbAuth = firebase.auth();
  
      return fbAuth
        .sendPasswordResetEmail(email)
        .then(() => console.log("sent Password Reset Email!"))
        .catch(error => console.log(error));
    }
  
    SignOut() {
      console.log("signout method in the servic called");
      this.angularFireAuth.signOut();
      localStorage.clear();
    }
  

}
