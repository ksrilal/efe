import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminTeacherService {

  constructor(private afs: AngularFirestore) { }

  add(data){
    this.afs.collection('teacher').add(data);
  }
}
