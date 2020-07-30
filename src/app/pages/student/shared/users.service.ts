import { Injectable } from '@angular/core';
import { FormControl , FormGroup ,Validators} from "@angular/forms";
import { AngularFirestore , AngularFirestoreCollection , AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
    studentCollection : AngularFirestoreCollection<any>;
  constructor( private afs : AngularFirestore ) { }


  form=new FormGroup({
    $id:new FormControl(null),
    firstName:new FormControl('' , Validators.required),
    lastName:new FormControl('' , Validators.required),
    mobile:new FormControl('' , Validators.minLength(10)),
    email:new FormControl('' , Validators.email),
    homeAddress:new FormControl('' , Validators.required),
    parentName:new FormControl('' , Validators.required),
    parentMobile:new FormControl('' , [Validators.required , Validators.minLength(10)]),
    
  });
   

    getStudents(){
      this.studentCollection=this.afs.collection('students');
      return this.studentCollection.snapshotChanges();
    }

    insertStudents(students){
      this.studentCollection.add({
        firstName:students.firstName,
        lastName:students.lastName,
        mobile:students.mobile,
        email:students.email,
        homeAddress:students.homeAddress,
        parentName:students.parentName,
        parentMobile:students.parentMobile,
        
      });
    }

    populateForm(students){
      this.form.setValue(students);
    }
  
    // updateStudents(students){
    //   this.studentCollection.update(students.$id,
    //     {
    //       firstName:students.firstName,
    //       // email:customer.email,
    //       // mobile:customer.mobile,
    //       // location:customer.location
    //     }
    //     );
    // }
  
    // deleteStudents($id: string){
    //   this.studentCollection.remove($id);
    // }
  
  }
  

