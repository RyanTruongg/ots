import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Divider,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  colors
} from '@material-ui/core';

import { Label } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 700
  },
  nameCell: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1)
  },
  actions: {
    padding: theme.spacing(1),
    justifyContent: 'flex-end'
  }
}));

const Results = props => {
  const { className, transactions, ...rest } = props;

  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value);
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography color="textSecondary" gutterBottom variant="body2">
        {transactions.length} Records found.
      </Typography>
      <Card>
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
                    <TableCell>Loại</TableCell>
                    <TableCell>Nội dung chuyển khoản</TableCell>
                    <TableCell>Yêu cầu điều chỉnh</TableCell>
                    <TableCell align="right">Tác vụ</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {transactions
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(transaction => (
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
                            {String(transaction.message)}
                          </Typography>
                        </TableCell>
                        <TableCell>{transaction.amount}</TableCell>
                        <TableCell>
                          {transaction.type === 'income' ? (
                            <Label color={colors.green[600]}>Thu</Label>
                          ) : (
                            <Label color={colors.red[600]}>Chi</Label>
                          )}
                        </TableCell>
                        <TableCell> {transaction.message}</TableCell>
                        <TableCell>
                          {transaction.update_requested ? (
                            <Label color={colors.orange[600]}>Yes</Label>
                          ) : (
                            <Label color={colors.grey[600]}>No</Label>
                          )}
                        </TableCell>
                        <TableCell align="right">
                          <Button
                            color="primary"
                            component={RouterLink}
                            size="small"
                            to="/accountant/transactions/1/summary"
                            variant="outlined">
                            Chi tiết
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={transactions.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      {/* <TableEditBar selected={selectedCustomers} /> */}
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  transactions: PropTypes.array.isRequired
};

Results.defaultProps = {
  transactions: []
};

export default Results;
