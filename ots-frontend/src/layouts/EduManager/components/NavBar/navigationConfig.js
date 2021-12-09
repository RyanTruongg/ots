import FolderIcon from '@material-ui/icons/FolderOutlined';

import SubjectIcon from '@material-ui/icons/Subject';
import GroupIcon from '@material-ui/icons/Group';

export default [
  {
    title: 'Dev',
    pages: [
      {
        title: 'Quản lý khóa học',
        href: '/edu-manager/courses',
        icon: FolderIcon
      },
      {
        title: 'Quản lý môn học',
        href: '/edu-manager/subjects',
        icon: SubjectIcon
      },
      {
        title: 'Quản lý học viên',
        href: '/edu-manager/students',
        icon: GroupIcon
      }
    ]
  }
];
