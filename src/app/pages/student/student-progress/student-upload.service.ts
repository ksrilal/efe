import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StudentUploadService {

  constructor(private afs: AngularFirestore) { }

  getUpload(cuid) {
    //console.log(cuid);
    return this.afs.collection('upload').doc(cuid).collection('up', ref => ref.orderBy('time')).valueChanges();
  }

  submit(data, cuid, name) {
    this.afs.collection('upload').doc(cuid).collection('up').doc(name).collection('stusub').add(data).then(() => {
      console.log("Document successfully written!");
  })
  .catch((error) => {
      console.error("Error writing document: ", error);
  });;
    //console.log("xcbshkvsdhbbchsacnusjacnahcancuacn**************************@@@@@@@@")
  }
}
 