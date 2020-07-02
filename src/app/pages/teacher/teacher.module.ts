import { NgModule } from '@angular/core';

import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { TeacherRoutingModule, routedComponents } from './teacher-routing.module';
import { TeacherHomeComponent } from "./teacher-home/teacher-home.component";
import { TeacherUploadComponent } from "./teacher-upload/teacher-upload.component";
import { TeacherComponent } from "./teacher.component";
import { TeacherProgressComponent } from './teacher-progress/teacher-progress.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TeacherRoutingModule,
    
  ],
  declarations: [
    ...routedComponents,
    TeacherComponent,
    TeacherHomeComponent,
    TeacherUploadComponent,
    TeacherProgressComponent,
    TeacherProfileComponent
  ],
})

export class TeacherModule { }
