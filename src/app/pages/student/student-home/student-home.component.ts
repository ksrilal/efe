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
          title: '<i class="fas fa-book-reader"></i>',
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
      delete: false,
      edit: false,
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


  source1;
  source2;
  user;
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
        // console.log("adoooooooooooooooooo");
        // console.log(flag);

        if(flag) {
          this.StudentHomeService.add(event.data, this.user);
        }

      } else {
        event.confirm.reject();
      }    
    }

}
