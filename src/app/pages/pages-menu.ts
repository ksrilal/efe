import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  //**********student dashboard
  {
    title: 'STUDENTS',
    group: true,
  },
  {
    title: 'Student Dashboard',
    icon: 'home-outline',
    link: '/pages/student/studenthome',
    home: true,
  },
  {
    title: 'Student Progress',
    icon: 'pie-chart-outline',
    link: '/pages/student/studentprogress',
  },
  {
    title: 'Student Payment',
    icon: 'grid-outline',
    link: '/pages/student/studentcourse',
  },
  {
    title: 'Student Profile Setting',
    icon: 'edit-2-outline',
    link: '/pages/student/studentprofile',
  },
  //**********teacher dashboard
  {
    title: 'TEACHER',
    group: true,
  },
  {
    title: 'Teacher Dashboard',
    icon: 'home-outline',
    link: '/pages/teacher/teacherhome',
    //home: true,
  },
  {
    title: 'Teacher Uploads',
    icon: 'text-outline',
    link: '/pages/teacher/teacherupload',
  },
  {
    title: 'Teacher Progress',
    icon: 'pie-chart-outline',
    link: '/pages/teacher/teacherprogress',
  },
  {
    title: 'Teacher Profile Setting',
    icon: 'edit-2-outline',
    link: '/pages/teacher/teacherprofile',
  },
//**********admin dashboard
  {
    title: 'ADMINISTRATION',
    group: true,
  },
 {
    title: 'Admin Dashboard',
    icon: 'home-outline',
    link: '/pages/admin/adminhome',
    //home: true,
  },
  {
    title: 'Admin Student Handle',
    icon: 'text-outline',
    link: '/pages/admin/adminstudenthandle',
  },
  {
    title: 'Admin Teacher Handle',
    icon: 'pie-chart-outline',
    link: '/pages/admin/adminteacherhandle',
  },
  {
    title: 'Admin Course Handle',
    icon: 'pie-chart-outline',
    link: '/pages/admin/admincoursehandle',
  },
  {
    title: 'Admin Payments Handle',
    icon: 'pie-chart-outline',
    link: '/pages/admin/adminpaymenthandle',
  },
  {
    title: 'Admin Profile Setting',
    icon: 'edit-2-outline',
    link: '/pages/admin/adminprofile',
  },
];
