import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import TodayIcon from '@material-ui/icons/Today';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

export default [
  {
    title: 'Dev',
    pages: [
      {
        title: 'Khóa học đang dạy',
        href: '/instructor/teaching-courses',
        icon: CollectionsBookmarkIcon
      },
      {
        title: 'Lịch dạy',
        href: '/instructor/calendar',
        icon: TodayIcon
      },
      {
        title: 'Thông tin cá nhân',
        href: '/instructor/info',
        icon: AccountBoxIcon
      }
    ]
  }
];
