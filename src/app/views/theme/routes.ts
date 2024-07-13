import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Registration'
    },
    children: [
     
     

      {
        path: 'student',
        loadComponent: () => import('./registration/student/student.component').then(m => m.StudentComponent),
        data: {
          title: 'Student'
        }
      },
      {
        path: 'employee',
        loadComponent: () => import('./registration/employee/employee.component').then(m => m.EmployeeComponent),
        data: {
          title: 'Employee'
        }
      },
      
    ]
  },
  {

    path: '',
    data:{
      title: 'Attendance'
    },
    children: [ {
      path: 'markattendance',
      loadComponent: () => import('./attendance/markattendance/markattendance.component').then(m => m.MarkattendanceComponent),
      data: {
        title: 'Mark Attendance'
      }
    },
    {
      path: 'viewattendance',
      loadComponent: () => import('./attendance/viewattendance/viewattendance.component').then(m => m.ViewattendanceComponent),
      data: {
        title: 'View Attendance'
      }
    },
    {
      path: 'editattendance',
      loadComponent: () => import('./attendance/editattendance/editattendance.component').then(m => m.EditattendanceComponent),
      data: {
        title: 'Edit Attendance'
      }
    },
    {
      path: 'successpage',
      loadComponent: () => import('./attendance/successpage/successpage.component').then(m => m.SuccesspageComponent),
      data: {
        title: 'Success Page'
      }
    }
  ]
  },
  {

    path: '',
    data:{
      title: 'Fee Management'
    },
    children: [ {
      path: 'page1',
      loadComponent: () => import('./feemanagement/page1/page1.component').then(m => m.Page1Component),
      data: {
        title: 'Page 1'
      }
    },
  ]
  }

];

