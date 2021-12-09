import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  colors,
  Typography
} from '@material-ui/core';

import { Label, GenericMoreButton } from 'components';
import TransactionService from 'services/transaction.service';
import { useAuth } from 'hooks/use-auth';

const useStyles = makeStyles(() => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1150
  }
}));

const Invoices = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [transactions, setTransactions] = useState([]);

  const auth = useAuth();

  useEffect(() => {
    if (auth.user) {
      TransactionService._getAllById(auth.user.user_id).then(res =>
        setTransactions(res.data.transactions)
      );
    }
  }, [auth.user]);

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Card>
        <CardHeader action={<GenericMoreButton />} title="Lịch sử giao dịch" />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Thời điểm</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Tổng</TableCell>

                    <TableCell>Nội dung chuyển khoản</TableCell>
                    <TableCell>Yêu cầu điều chỉnh</TableCell>
                    <TableCell align="right">Tác vụ</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {transactions.map(transaction => (
                    <TableRow hover key={transaction.code}>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Typography variant="body1">
                            {new Date(transaction.issued_at).toLocaleString()}
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1">
                          {transaction.message}
                        </Typography>
                      </TableCell>
                      <TableCell>{transaction.amount}đ</TableCell>

                      <TableCell> {transaction.message}</TableCell>
                      <TableCell>
                        {transaction.update_requested ? (
                          <Label color={colors.orange[600]}>Yes</Label>
                        ) : (
                          <Label color={colors.grey[600]}>No</Label>
                        )}
                      </TableCell>
                      <TableCell align="right">
                        <Button color="primary" size="small" variant="outlined">
                          Yêu cầu điều chỉnh
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
      </Card>
    </div>
  );
};

Invoices.propTypes = {
  className: PropTypes.string
};

export default Invoices;
