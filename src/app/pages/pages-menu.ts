import { NbMenuItem } from '@nebular/theme';
import { title } from 'process';

export const student: NbMenuItem[] = [
  //**********student dashboard
  {
    title: "Home",
    icon: "home-outline",
    link: "/pages/iot-dashboard",
    home: true
  },
  {
    title: 'STUDENTS',
    group: true,
  },
  {
    title: 'Courses',
    icon: 'grid-outline',
    link: '/pages/student/studenthome',
    //home: true,
  },
  {
    title: 'My Courses',
    icon: 'grid-outline',
    link: '/pages/student/studentprogress',
  },
  {
    title: 'Invoice',
    icon: 'grid-outline',
    link: '/pages/student/studentcourse',
  },
  {
    title: 'Profile',
    icon: 'grid-outline',
    link: '/pages/student/studentprofile',
  },
];


export const teacher: NbMenuItem[] = [
  //**********teacher dashboard
  {
    title: "Home",
    icon: "home-outline",
    link: "/pages/iot-dashboard",
    home: true
  },
  {
    title: 'TEACHER',
    group: true,
  },
  // {
  //   title: 'Courses',
  //   icon: 'grid-outline',
  //   link: '/pages/teacher/teacherhome',
  //   //home: true,
  // },
  {
    title: 'Tutorials',
    icon: 'grid-outline',
    link: '/pages/teacher/teacherupload',
  },
  {
    title: 'Chat',
    icon: 'grid-outline',
    link: '/pages/teacher/teacherprogress',
  },
  {
    title: 'Profile',
    icon: 'grid-outline',
    link: '/pages/teacher/teacherprofile',
  },
];

export const admin: NbMenuItem[] = [
  //**********admin dashboard
  {
    title: "Home",
    icon: "home-outline",
    link: "/pages/iot-dashboard",
    home: true
  },
  {
    title: 'ADMINISTRATION',
    group: true,
  },
 {
    title: 'Info',
    icon: 'grid-outline',
    link: '/pages/admin/adminhome',
    //home: true,
  },
  {
    title: 'Student Handle',
    icon: 'grid-outline',
    children: [
      {
        title: 'Register Student',
        link: '/pages/admin/adminaddstudent',
      },
      {
        title: 'Students Info',
        link: '/pages/admin/adminstudenthandle',
      },
    ]
  },
  {
    title: 'Teacher Handle',
    icon: 'grid-outline',
    children: [
      {
        title: 'Register Teacher',
        link: '/pages/admin/adminaddteacher',
      },
      {
        title: 'Teachers Info',
        link: '/pages/admin/adminteacherhandle',
      },
    ]
  },
  {
    title: 'Course Handle',
    icon: 'grid-outline',
    children: [
      {
        title: 'Add Course',
        link: '/pages/admin/adminaddcourse',
      },
      {
        title: 'Courses Info',
        link: '/pages/admin/admincoursehandle',
      },
    ]
  },
  {
    title: 'Payments Info',
    icon: 'grid-outline',
    link: '/pages/admin/adminpaymenthandle',
  },
  // {
  //   title: 'Profile',
  //   icon: 'grid-outline',
  //   link: '/pages/admin/adminprofile',
  // },
];


//for vip admin to view all**********************************************************

export const all: NbMenuItem[] = [
   //**********student dashboard
   {
    title: "Home",
    icon: "home-outline",
    link: "/pages/iot-dashboard",
    home: true
  },
  {
    title: 'STUDENTS',
    group: true,
  },
  {
    title: 'Courses',
    icon: 'grid-outline',
    link: '/pages/student/studenthome',
    //home: true,
  },
  {
    title: 'My Courses',
    icon: 'grid-outline',
    link: '/pages/student/studentprogress',
  },
  {
    title: 'Invoice',
    icon: 'grid-outline',
    link: '/pages/student/studentcourse',
  },
  {
    title: 'Profile',
    icon: 'grid-outline',
    link: '/pages/student/studentprofile',
  },
   //**********teacher dashboard
  //  {
  //   title: "Home",
  //   icon: "home-outline",
  //   link: "/pages/iot-dashboard",
  //   home: true
  // },
  {
    title: 'TEACHER',
    group: true,
  },
  // {
  //   title: 'Courses',
  //   icon: 'grid-outline',
  //   link: '/pages/teacher/teacherhome',
  //   //home: true,
  // },
  {
    title: 'Tutorials',
    icon: 'grid-outline',
    link: '/pages/teacher/teacherupload',
  },
  {
    title: 'Chat',
    icon: 'grid-outline',
    link: '/pages/teacher/teacherprogress',
  },
  {
    title: 'Profile',
    icon: 'grid-outline',
    link: '/pages/teacher/teacherprofile',
  },
  //**********admin dashboard
  // {
  //   title: "Home",
  //   icon: "home-outline",
  //   link: "/pages/iot-dashboard",
  //   home: true
  // },
  {
    title: 'ADMINISTRATION',
    group: true,
  },
 {
    title: 'Info',
    icon: 'grid-outline',
    link: '/pages/admin/adminhome',
    //home: true,
  },
  {
    title: 'Student Handle',
    icon: 'grid-outline',
    children: [
      {
        title: 'Register Student',
        link: '/pages/admin/adminaddstudent',
      },
      {
        title: 'Students Info',
        link: '/pages/admin/adminstudenthandle',
      },
    ]
  },
  {
    title: 'Teacher Handle',
    icon: 'grid-outline',
    children: [
      {
        title: 'Register Teacher',
        link: '/pages/admin/adminaddteacher',
      },
      {
        title: 'Teachers Info',
        link: '/pages/admin/adminteacherhandle',
      },
    ]
  },
  {
    title: 'Course Handle',
    icon: 'grid-outline',
    children: [
      {
        title: 'Add Course',
        link: '/pages/admin/adminaddcourse',
      },
      {
        title: 'Courses Info',
        link: '/pages/admin/admincoursehandle',
      },
    ]
  },
  {
    title: 'Payments Info',
    icon: 'grid-outline',
    link: '/pages/admin/adminpaymenthandle',
  },
  // {
  //   title: 'Profile',
  //   icon: 'grid-outline',
  //   link: '/pages/admin/adminprofile',
  // },
];