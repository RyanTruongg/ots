import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow
} from '@material-ui/core';

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

const Invoices = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader title="Tài khoản" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Số dư</TableCell>
              <TableCell>10000000</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Đã chi</TableCell>
              <TableCell>500000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tổng</TableCell>
              <TableCell>105000000</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Khóa học đã tham gia</TableCell>
              <TableCell>20</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

Invoices.propTypes = {
  className: PropTypes.string,
  customer: PropTypes.object.isRequired
};

export default Invoices;
