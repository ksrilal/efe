import { Injectable } from '@angular/core';
import * as firebase from "firebase/app";
import { AngularFirestore } from '@angular/fire/firestore';
import { id } from '@swimlane/ngx-charts';


@Injectable({
  providedIn: 'root'
})
export class ApplyregService {

  constructor(private afs:AngularFirestore) { }

  create(data) {
        this.afs.collection('applyreg').add(data).then(_ => alert("Submit successfll!"));
        }
    
}
