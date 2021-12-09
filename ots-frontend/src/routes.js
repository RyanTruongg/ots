/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import AuthLayout from './layouts/Auth';
import AdminLayout from './layouts/Admin';
import EduManagerLayout from './layouts/EduManager';
import AccountantLayout from './layouts/Accountant';
import EduQVLayout from './layouts/EduQV';

import StudentLayout from './layouts/Student';
import InstuctorLayout from './layouts/Instuctor';

import ErrorLayout from './layouts/Error';
import DashboardLayout from './layouts/Dashboard';
import DashboardAnalyticsView from './views/DashboardAnalytics';
import DashboardDefaultView from './views/DashboardDefault';
import OverviewView from './views/Overview';
import PresentationView from './views/Presentation';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/presentation" />
  },
  {
    path: '/auth',
    component: AuthLayout,
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: lazy(() => import('views/Login'))
      },
      {
        path: '/auth/register',
        exact: true,
        component: lazy(() => import('views/Register'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    path: '/edu-manager',
    component: EduManagerLayout,
    routes: [
      {
        path: '/edu-manager/courses',
        exact: true,
        component: lazy(() =>
          import('views/_EduManagerViews/EduManagerCourses')
        )
      },
      {
        path: '/edu-manager/courses/create',
        exact: true,
        component: lazy(() =>
          import('views/_EduManagerViews/EduManagerCourseCreate')
        )
      },
      {
        path: '/edu-manager/courses/:id',
        exact: true,
        component: lazy(() =>
          import('views/_EduManagerViews/EduManagerCourseDetails')
        )
      },
      {
        path: '/edu-manager/courses/:id/:tab',
        exact: true,
        component: lazy(() =>
          import('views/_EduManagerViews/EduManagerCourseDetails')
        )
      },
      {
        path: '/edu-manager/subjects',
        exact: true,
        component: lazy(() =>
          import('views/_EduManagerViews/EduManagerSubjects')
        )
      },
      {
        path: '/edu-manager/subjects/create',
        exact: true,
        component: lazy(() =>
          import('views/_EduManagerViews/EduManagerSubjectCreate')
        )
      },
      {
        path: '/edu-manager/subjects/:id',
        exact: true,
        component: lazy(() =>
          import('views/_EduManagerViews/EduManagerSubjectDetails')
        )
      },
      {
        path: '/edu-manager/subjects/:id/:tab',
        exact: true,
        component: lazy(() =>
          import('views/_EduManagerViews/EduManagerSubjectDetails')
        )
      },

      {
        path: '/edu-manager/students',
        exact: true,
        component: lazy(() =>
          import('views/_EduManagerViews/EduManagerStudents')
        )
      },
      {
        path: '/edu-manager/students/:id',
        exact: true,
        component: lazy(() =>
          import('views/_EduManagerViews/EduManagerStudentDetails')
        )
      },
      {
        path: '/edu-manager/students/:id/:tab',
        exact: true,
        component: lazy(() =>
          import('views/_EduManagerViews/EduManagerStudentDetails')
        )
      }
    ]
  },
  {
    path: '/admin',
    component: AdminLayout,
    routes: [
      {
        path: '/admin',
        exact: true,
        component: () => <Redirect to="/admin/staffs" />
      },
      {
        path: '/admin/staffs',
        exact: true,
        component: lazy(() => import('views/_AdminViews/AdminStaffs'))
      },

      {
        path: '/admin/staffs/create',
        exact: true,
        component: lazy(() => import('views/_AdminViews/AdminStaffCreate'))
      },

      {
        path: '/admin/staffs/:id',
        exact: true,
        component: lazy(() => import('views/_AdminViews/AdminStaffDetails'))
      },
      {
        path: '/admin/staffs/:id/:tab',
        exact: true,
        component: lazy(() => import('views/_AdminViews/AdminStaffDetails'))
      },

      {
        path: '/admin/vouchers',
        exact: true,
        component: lazy(() => import('views/_AdminViews/AdminVouchers'))
      },

      {
        path: '/admin/vouchers/create',
        exact: true,
        component: lazy(() => import('views/_AdminViews/AdminVoucherCreate'))
      },

      {
        path: '/admin/vouchers/:id',
        exact: true,
        component: lazy(() => import('views/_AdminViews/AdminVoucherDetails'))
      },
      {
        path: '/admin/vouchers/:id/:tab',
        exact: true,
        component: lazy(() => import('views/_AdminViews/AdminVoucherDetails'))
      },

      {
        path: '/admin/financial-report',
        exact: true,
        component: lazy(() => import('views/_AdminViews/AdminFinancialReport'))
      },

      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },

  {
    path: '/accountant',
    component: AccountantLayout,
    routes: [
      {
        path: '/accountant',
        exact: true,
        component: () => <Redirect to="/accountant/transactions" />
      },
      {
        path: '/accountant/transactions',
        exact: true,
        component: lazy(() =>
          import('views/_AccountantViews/AccountantTransactions')
        )
      },
      {
        path: '/accountant/transactions/create',
        exact: true,
        component: lazy(() =>
          import('views/_AccountantViews/AccountantTransactionCreate')
        )
      },
      {
        path: '/accountant/transactions/:id',
        exact: true,
        component: lazy(() =>
          import('views/_AccountantViews/AccountantTransactionDetails')
        )
      },
      {
        path: '/accountant/transactions/:id/:tab',
        exact: true,
        component: lazy(() =>
          import('views/_AccountantViews/AccountantTransactionDetails')
        )
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    path: '/edu-qv',
    component: EduQVLayout,
    routes: [
      {
        path: '/edu-qv',
        exact: true,
        component: () => <Redirect to="/edu-qv/courses" />
      },
      {
        path: '/edu-qv/courses',
        exact: true,
        component: lazy(() => import('views/_EduQVViews/EduQVCourses'))
      },
      {
        path: '/edu-qv/courses/:id',
        exact: true,
        component: lazy(() => import('views/_EduQVViews/EduQVCourseDetails'))
      },
      {
        path: '/edu-qv/courses/:id/:tab',
        exact: true,
        component: lazy(() => import('views/_EduQVViews/EduQVCourseDetails'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    path: '/student',
    component: StudentLayout,
    routes: [
      {
        path: '/student',
        exact: true,
        component: () => <Redirect to="/student/home" />
      },
      {
        path: '/student/home',
        exact: true,
        component: lazy(() => import('views/_StudentViews/StudentHome'))
      },
      {
        path: '/student/courses/:id',
        exact: true,
        component: lazy(() =>
          import('views/_StudentViews/StudentCourseDetails')
        )
      },
      {
        path: '/student/info',
        exact: true,
        component: lazy(() => import('views/_StudentViews/StudentAccount'))
      },
      {
        path: '/student/info/:tab',
        exact: true,
        component: lazy(() => import('views/_StudentViews/StudentAccount'))
      },
      {
        path: '/student/courses/:id/:tab',
        exact: true,
        component: lazy(() =>
          import('views/_StudentViews/StudentCourseDetails')
        )
      },

      {
        path: '/student/enrolled-courses',
        exact: true,
        component: lazy(() =>
          import('views/_StudentViews/StudentEnrolledCourses')
        )
      },
      {
        path: '/student/enrolled-courses/:id',
        exact: true,
        component: lazy(() =>
          import('views/_StudentViews/StudentEnrolledCourseDetails')
        )
      },
      {
        path: '/student/enrolled-courses/:id/:tab',
        exact: true,
        component: lazy(() =>
          import('views/_StudentViews/StudentEnrolledCourseDetails')
        )
      },

      {
        path: '/student/calendar',
        exact: true,
        component: lazy(() => import('views/_StudentViews/StudentCalendar'))
      }
    ]
  },
  {
    path: '/instructor',
    component: InstuctorLayout,
    routes: [
      {
        path: '/instructor',
        exact: true,
        component: () => <Redirect to="/instructor/teaching-courses" />
      },

      {
        path: '/instructor/teaching-courses',
        exact: true,
        component: lazy(() =>
          import('views/_InstructorViews/InstructorCourses')
        )
      },

      {
        path: '/instructor/courses/:id',
        exact: true,
        component: lazy(() =>
          import('views/_InstructorViews/InstructorCourseDetails')
        )
      },
      {
        path: '/instructor/courses/:id/:tab',
        exact: true,
        component: lazy(() =>
          import('views/_InstructorViews/InstructorCourseDetails')
        )
      },

      {
        path: '/instructor/calendar',
        exact: true,
        component: lazy(() =>
          import('views/_InstructorViews/InstructorCalendar')
        )
      }
    ]
  },
  {
    path: '/errors',
    component: ErrorLayout,
    routes: [
      {
        path: '/errors/error-401',
        exact: true,
        component: lazy(() => import('views/Error401'))
      },
      {
        path: '/errors/error-404',
        exact: true,
        component: lazy(() => import('views/Error404'))
      },
      {
        path: '/errors/error-500',
        exact: true,
        component: lazy(() => import('views/Error500'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/calendar',
        exact: true,
        component: lazy(() => import('views/Calendar'))
      },
      {
        path: '/changelog',
        exact: true,
        component: lazy(() => import('views/Changelog'))
      },
      {
        path: '/chat',
        exact: true,
        component: lazy(() => import('views/Chat'))
      },
      {
        path: '/chat/:id',
        exact: true,
        component: lazy(() => import('views/Chat'))
      },
      {
        path: '/dashboards/analytics',
        exact: true,
        component: DashboardAnalyticsView
      },
      {
        path: '/dashboards/default',
        exact: true,
        component: DashboardDefaultView
      },
      {
        path: '/invoices/:id',
        exact: true,
        component: lazy(() => import('views/InvoiceDetails'))
      },
      {
        path: '/kanban-board',
        exact: true,
        component: lazy(() => import('views/KanbanBoard'))
      },
      {
        path: '/mail',
        exact: true,
        component: lazy(() => import('views/Mail'))
      },
      {
        path: '/management/customers',
        exact: true,
        component: lazy(() => import('views/CustomerManagementList'))
      },
      {
        path: '/management/customers/:id',
        exact: true,
        component: lazy(() => import('views/CustomerManagementDetails'))
      },
      {
        path: '/management/customers/:id/:tab',
        exact: true,
        component: lazy(() => import('views/CustomerManagementDetails'))
      },
      {
        path: '/management/projects',
        exact: true,
        component: lazy(() => import('views/ProjectManagementList'))
      },
      {
        path: '/management/orders',
        exact: true,
        component: lazy(() => import('views/OrderManagementList'))
      },
      {
        path: '/management/orders/:id',
        exact: true,
        component: lazy(() => import('views/OrderManagementDetails'))
      },
      {
        path: '/overview',
        exact: true,
        component: OverviewView
      },
      {
        path: '/presentation',
        exact: true,
        component: PresentationView
      },
      {
        path: '/profile/:id',
        exact: true,
        component: lazy(() => import('views/Profile'))
      },
      {
        path: '/profile/:id/:tab',
        exact: true,
        component: lazy(() => import('views/Profile'))
      },
      {
        path: '/projects/create',
        exact: true,
        component: lazy(() => import('views/ProjectCreate'))
      },
      {
        path: '/projects/:id',
        exact: true,
        component: lazy(() => import('views/ProjectDetails'))
      },
      {
        path: '/projects/:id/:tab',
        exact: true,
        component: lazy(() => import('views/ProjectDetails'))
      },
      {
        path: '/projects',
        exact: true,
        component: lazy(() => import('views/ProjectList'))
      },
      {
        path: '/settings',
        exact: true,
        component: lazy(() => import('views/Settings'))
      },
      {
        path: '/settings/:tab',
        exact: true,
        component: lazy(() => import('views/Settings'))
      },
      {
        path: '/social-feed',
        exact: true,
        component: lazy(() => import('views/SocialFeed'))
      },
      {
        path: '/getting-started',
        exact: true,
        component: lazy(() => import('views/GettingStarted'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  }
];

export default routes;
