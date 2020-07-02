import { Component, OnInit } from '@angular/core';
import { SmartTableData } from '../../../@core/data/smart-table';
import { LocalDataSource } from 'ng2-smart-table';
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

  settings = {
    actions: {
      add: false,
      delete: false,
      edit: false,
      custom: [
        {
          name: 'view',
          title: '<i class="fas fa-book-reader" title="Add to My Courses"></i>'
        },
      ],
    },
    columns: {
      ccode: {
        title: 'Course Code',
        type: 'number',
      },
      cname: {
        title: 'Course Name',
        type: 'string',
      },
      cteacher: {
        title: 'Tutor',
        type: 'string',
      },
      day: {
        title: 'Day',
        type: 'string',
      },
      time: {
        title: 'Time',
        type: 'string',
      },
      // venue: {
      //   title: 'Venue',
      //   type: 'number',
      // },
    },
    attr: {
      class: 'table table-bordered'
    },
  };

  source1;
  source2;

  constructor(private StudentHomeService: StudentHomeService) {
    StudentHomeService.getAll().subscribe(result => {
      this.source1 = result;
    });

    StudentHomeService.getMy().subscribe(result => {
      this.source2 = result;
    });
  }

  onSaveConfirm(event): void {
    
      if (window.confirm("Are you sure you want to add this to my courses?")) {
        // event.confirm.resolve();
        console.log(event.data)
        
        this.StudentHomeService.add(event.data);
        //console.log(event.data)
      } else {
        event.confirm.reject();
      }    
    }


  // onDeleteConfirm(event): void {
  //   if (window.confirm('Are you sure you want to delete?')) {
  //     event.confirm.resolve();
  //   } else {
  //     event.confirm.reject();
  //   }
  // }

  ngOnInit(): void {
  }

}
