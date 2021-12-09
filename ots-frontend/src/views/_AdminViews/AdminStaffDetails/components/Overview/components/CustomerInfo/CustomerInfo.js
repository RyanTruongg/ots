import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import { CustomerEdit } from './components';
import roleMap from 'constants/roleMap';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  actions: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& > * + *': {
      marginLeft: 0
    }
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  }
}));

const StaffInfo = props => {
  const { staff, className, setStaff, ...rest } = props;

  const classes = useStyles();

  const [openEdit, setOpenEdit] = useState(false);

  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader title="Thông tin nhân viên  " />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow selected>
              <TableCell>Họ tên</TableCell>
              <TableCell>{staff.displayName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>{staff.email}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>SDT</TableCell>
              <TableCell>{staff.phone}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Chức vụ</TableCell>
              <TableCell>{roleMap[staff.customClaims?.role]}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={handleEditOpen}>
          <EditIcon className={classes.buttonIcon} />
          Chỉnh sửa
        </Button>
      </CardActions>
      <CustomerEdit
        onClose={handleEditClose}
        open={openEdit}
        setStaff={setStaff}
        staff={staff}
      />
    </Card>
  );
};

StaffInfo.propTypes = {
  className: PropTypes.string,
  setStaff: PropTypes.func,
  staff: PropTypes.object.isRequired
};

export default StaffInfo;
