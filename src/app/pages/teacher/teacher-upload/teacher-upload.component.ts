import { Component, OnInit } from '@angular/core';

import { FileUploadService } from '../../../file-upload.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-teacher-upload',
  templateUrl: './teacher-upload.component.html',
  styleUrls: ['./teacher-upload.component.scss']
})
export class TeacherUploadComponent implements OnInit {
  profileForm: FormGroup;
  error: string;

  fileUpload = {status: '', message: '', filePath: ''};

  constructor(private fb: FormBuilder, private fileUploadService: FileUploadService, ) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: [''],
      profile: ['']
    });
  }
  onSelectedFile(event){
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.profileForm.get('profile').setValue(file);
    }
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('name', this.profileForm.get('name').value);
    formData.append('profile', this.profileForm.get('profile').value);

    this.fileUploadService.upload(formData).subscribe(
      res => this.fileUpload = res,
      err => this.error = err
    );
  }

}
