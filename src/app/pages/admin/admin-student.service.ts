import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminStudentService {

  constructor(private afs: AngularFirestore) {  }

  add(data){
    this.afs.collection('student').add(data);
  }
}
