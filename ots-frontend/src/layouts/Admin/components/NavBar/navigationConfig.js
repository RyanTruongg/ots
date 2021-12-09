import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

export default [
  {
    title: 'Dev',
    pages: [
      {
        title: 'Quản lý nhân viên',
        href: '/admin/staffs',
        icon: AssignmentIndIcon
      },
      {
        title: 'Báo cáo thu chi',
        href: '/admin/financial-report',
        icon: ReceiptIcon
      },
      {
        title: 'Quản lý vouchers',
        href: '/admin/vouchers',
        icon: LocalAtmIcon
      }
    ]
  }
];
