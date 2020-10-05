import { Component, OnInit } from '@angular/core';
import { StudentHomeService } from "./student-home.service";


@Component({
  selector: 'ngx-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {

  status1: boolean = true;
  status2: boolean = false;

  status1changes() {
      this.status1 = true;
      this.status2 = false; 
  }
  status2changes() {
    this.status1 = false;
    this.status2 = true;
}
 
//all courses table
  settings1 = {
    actions: {
      add: false,
      delete: false,
      edit: false,
      custom: [
        {
          name: 'view', 
          title: '<i class="fas fa-book-reader" title="Add to My Courses"></i>',
        },
      ],
    },
    columns: {
      cuid: {
        title: 'Course Code',
        type: 'number',
      },
      name: {
        title: 'Course Name',
        type: 'string',
      },
      tname: {
        title: 'Tutor',
        type: 'string',
      },
      tid: {
        title: 'Day',
        type: 'string',
      },
      time: {
        title: 'Time',
        type: 'string',
      },
    },
    attr: {
      class: 'table table-bordered'
    },
  };
  
  //my courses table
  settings2 = {
    actions: {
      add: false,
      edit: false,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true
    },
    columns: {
      cuid: {
        title: 'Course Code',
        type: 'number',
      },
      name: {
        title: 'Course Name',
        type: 'string',
      },
      tname: {
        title: 'Tutor',
        type: 'string',
      },
      tid: {
        title: 'Day',
        type: 'string',
      },
      time: {
        title: 'Time',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
    },
    attr: {
      class: 'table table-bordered'
    },
  }; 

  onDeleteConfirm(event): void {
    if(event.data.status != "paid"){
      if (window.confirm("Are you sure you want to delete?")) {
        this.StudentHomeService.deleteMyCourse(this.user, event.data.cuid)
      } 
    }else {
      alert("This Course has been Paid, so you can not remove this course untill next month.");
    }
    
  }

  source1;
  source2;
  user;
  userDetails;
  username;
  userid;

    ngOnInit(): void {
      this.user = localStorage.getItem("mail");
    }

  constructor(private StudentHomeService: StudentHomeService) {
    StudentHomeService.getAll().subscribe(result => {
      this.source1 = result;
    });

    this.user = localStorage.getItem("mail");
    console.log("userrrrrrr " + this.user);

    StudentHomeService.getMy(this.user).subscribe(result => {
      this.source2 = result;
    });
    
    StudentHomeService.getMyDetails().subscribe(result => {
      this.userDetails = result;
    });
  }

  // add data to my courses.....
  onSaveConfirm(event): void {
    
      if (window.confirm("Are you sure you want to add this to my courses?")) {
        // event.confirm.resolve();
        // console.log('zzzzzzzzzzzzzzzzzz');
        // console.log(event.data.cuid);
        //console.log(this.source2);

        let flag = true;
        for (var i = 0; i < this.source2.length; i++) {
          if (this.source2[i].cuid == event.data.cuid){
            alert("Already Added!");
            flag = false;
            break;
          }
        } 
       // let tag = true;
        for (var i = 0; i < this.userDetails.length; i++) {
          if (this.userDetails[i].email == this.user){
              this.username = this.userDetails[i].name;
              this.userid = this.userDetails[i].sid;

            //tag = false;
            break;
          }
        }
        // console.log("adoooooooooooooooooo");
        // console.log(flag);

        if(flag) {
          //event.data.status = "not paid";
          this.StudentHomeService.add(event.data, this.user, event.data.cuid, this.username, this.userid);
          //console.log("adoooooooooooooooooo******************");
          //console.log(this.username);
        }

      } else {
        event.confirm.reject();
      }    
    }

}
