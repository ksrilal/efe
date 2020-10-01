import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class TeacherUploadService {

  constructor(private afs: AngularFirestore) { }

  send(data, cuid, name) {

    this.afs.collection('upload').doc(cuid).collection('up').doc(name).set(data);
    // console.log('fuck u ');
    // console.log(data);
    // console.log("csvsjkjcdbvhbdvbshdvbhdvsh");
    // console.log(cuid);
  }

  getUpload(cuid) {
    //console.log(cuid);
    return this.afs.collection('upload').doc(cuid).collection('up', ref => ref.orderBy('time')).valueChanges();
  }

  getSubData(cuid, name) {
    //console.log(cuid);
    return this.afs.collection('upload').doc(cuid).collection('up').doc(name).collection('stusub').valueChanges();
  }

  upDelete(cuid, name) {
    if(confirm("Are you sure to delete "+name+" ?")) {
      this.afs.collection('upload').doc(cuid).collection('up').doc(name).delete();
      console.log("Implement delete functionality here");
    }
  }

}
 