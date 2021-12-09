import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import HomeIcon from '@material-ui/icons/Home';
import TodayIcon from '@material-ui/icons/Today';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

export default [
  {
    title: 'Dev',
    pages: [
      {
        title: 'Trang chủ',
        href: '/student/home',
        icon: HomeIcon
      },
      {
        title: 'Khóa học',
        href: '/student/enrolled-courses',
        icon: CollectionsBookmarkIcon
      },
      {
        title: 'Thời khóa biểu',
        href: '/student/calendar',
        icon: TodayIcon
      },
      {
        title: 'Thông tin cá nhân',
        href: '/student/info',
        icon: AccountBoxIcon
      }
    ]
  }
];
