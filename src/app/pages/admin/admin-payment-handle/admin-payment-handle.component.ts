import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { PaymentHandleService } from "./payment-handle.service";
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'ngx-admin-payment-handle',
  templateUrl: './admin-payment-handle.component.html',
  styleUrls: ['./admin-payment-handle.component.scss']
})
export class AdminPaymentHandleComponent implements OnInit {

  settings = {
    actions: {
      add: false,
      delete: false,
      edit: false,
    },
    columns: {
      sid: {
        title: 'Student ID',
        type: 'number',
      },
      sname: {
        title: 'Student Name',
        type: 'string',
      },
      timeString: {
        title: 'Time & Date',
        type: 'string',
      },
    },
  };

  source;
  courses;
  table;

  constructor(private PaymentHandleService: PaymentHandleService) {

    PaymentHandleService.getCourses().subscribe(result => {
      this.courses = result;
    });

    PaymentHandleService.getInvoice().subscribe(r => {
      this.source = r;
      // for(let i=0;i<this.source.length;i++){
      //   this.table[i] = this.source[i];
      // }
      this.table = this.source.map(object =>({...object}));
    })

   }

  ngOnInit(): void {
  }

  getInvoice(cuid) {
    
    this.table = this.source.map(object =>({...object}));

    // console.log("click click click click");
    //console.log("***********");
    //console.log(this.source.length);
    for(let i=0; i<this.source.length; i++) {
      if(this.source[i].cuid != cuid){
        this.table[i].cuid = "";
        this.table[i].id = "";
        this.table[i].name = "";
        this.table[i].semail = "";
        this.table[i].sid = "";
        this.table[i].sname = "";
        this.table[i].time = "";
        this.table[i].timeString = "";
      }
    }
  }
  
  getAllInvoice(){
    this.table = this.source.map(object =>({...object}));
  }

  handleSelected(data) {
  }

  id;
  semail;
  resetAllInvoice() {
    if (window.confirm("Are you sure that you want to reset invoices?")) {
    this.source.forEach(element => {
        this.semail = element.semail;
        this.id = element.id;
        //console.log(this.semail);
        //console.log(this.id);
        this.PaymentHandleService.resetInvoice(this.semail, this.id);
      });
    }
  }

  // downloadPDF(divId) {

  //       let data = document.getElementById('divId');  
  //       html2canvas(data).then(canvas => {
  //       const contentDataURL = canvas.toDataURL('image/png')  
  //       let pdf = new jsPDF('l', 'cm', 'a4'); //Generates PDF in landscape mode
  //       // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
  //       pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);  
  //       pdf.save('Filename.pdf');   
  //     }); 
      
  //   }

    @ViewChild('htmlData') htmlData:ElementRef;

    public downloadPDF():void {
      let DATA = this.htmlData.nativeElement;
      let doc = new jsPDF('p','pt', 'a4');
  
      let handleElement = {
        '#editor':function(element,renderer){
          return true;
        }
      };
      // doc.fromHTML(DATA.innerHTML,15,15,{
      //   'width': 200,
      //   'elementHandlers': handleElement
      // });
      doc.save('payment.pdf'); 
    }

}
