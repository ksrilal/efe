import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service'; 


@Component({
  selector: 'ngx-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  studentsArray=[];
  showDeletedMessage:boolean;
  searchText: string="";
  constructor(public usersService : UsersService) { }

 
ngOnInit() {
  this.usersService.getStudents().subscribe(
    list => {
      this.studentsArray = list.map(item => {
        return {
          $id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
      });
    });    
}

// onDelete($id){
//   if(confirm("Are you sure to delete this record ?")){
//     this.usersService.deleteStudents($id);
//     this.showDeletedMessage=true;
//     setTimeout(() => this.showDeletedMessage=false,3000);
//   }
// }


filterCondition(students){
  return students.firstName.toLowerCase().indexOf(this.searchText.toLowerCase()) !=-1;
}
}