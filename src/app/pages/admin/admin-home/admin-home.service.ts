import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AdminHomeService {
  deleteApplications(email: any) {
    this.afs.collection('applyreg').doc(email).delete();
  }
  getApplications() {
    return this.afs.collection('applyreg').valueChanges();
  }
  send(value: any) {
    console.log(value.time);
    this.afs.collection('anouncements').doc(value.timestring).set(value).then(function() {
        
      alert("Anouncement successfully Added!");
  })
  .catch(function(error) {
    alert("Something Went Wrong!");
  }); ;
  }

  constructor(private afs: AngularFirestore) { }
}
