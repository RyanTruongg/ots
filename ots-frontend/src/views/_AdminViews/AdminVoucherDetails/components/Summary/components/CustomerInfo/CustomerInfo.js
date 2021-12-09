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

const CustomerInfo = props => {
  const { className, voucher, ...rest } = props;

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
      <CardHeader title="Voucher" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow selected>
              <TableCell>Tên</TableCell>
              <TableCell>{voucher.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Code</TableCell>
              <TableCell>{voucher.code}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Tổng giảm</TableCell>
              <TableCell>{voucher.discount_rate}đ</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Ngày hết hạn</TableCell>
              <TableCell>
                {new Date(voucher.expire_at).toDateString()}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={handleEditOpen}>
          <EditIcon className={classes.buttonIcon} />
          Edit
        </Button>
      </CardActions>
      <CustomerEdit
        onClose={handleEditClose}
        open={openEdit}
        voucher={voucher}
      />
    </Card>
  );
};

CustomerInfo.propTypes = {
  className: PropTypes.string,
  voucher: PropTypes.object.isRequired
};

export default CustomerInfo;
