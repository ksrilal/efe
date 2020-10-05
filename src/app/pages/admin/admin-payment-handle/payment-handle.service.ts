import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PaymentHandleService {

  constructor(private afs: AngularFirestore,) { }

  getCourses() {
    return this.afs.collection('courses').valueChanges();
  }

  getInvoice() {
    return this.afs.collection('invoice').valueChanges();
  }

  resetInvoice(semail, id) {
    this.afs.collection('stucourses').doc(semail).collection('mycourse').doc(id).update({
      status: "not paid",
    }).then(function() {
        
      console.log("Payment successfully Mark As Not Paid!");
    })
    .catch(function(error) {
        console.log("Something Went Wrong!");
    }); 
  }


}
