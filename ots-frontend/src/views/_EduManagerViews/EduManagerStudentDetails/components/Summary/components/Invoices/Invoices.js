import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
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
      <CardHeader title="Billing" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            {/* <TableRow>
              <TableCell>Auto CC Pay</TableCell>
              <TableCell>
                {customer.iban}
                <div>
                  <Label
                    color={
                      customer.autoCC ? colors.green[600] : colors.red[600]
                    }>
                    {customer.autoCC ? 'YES' : 'NO'}
                  </Label>
                </div>
              </TableCell>
            </TableRow> */}
            <TableRow>
              <TableCell>Balance</TableCell>
              <TableCell>10000000</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Spent</TableCell>
              <TableCell>500000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell>105000000</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Enrolled courses</TableCell>
              <TableCell>20</TableCell>
            </TableRow>
            {/* <TableRow>
              <TableCell>Refunded</TableCell>
              <TableCell>
                {refundedInvoices.length} ({customer.currency}
                {refundedTotal})
              </TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Gross Income</TableCell>
              <TableCell>
                {incomeInvoices.length} ({customer.currency}
                {incomeTotal})
              </TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        {/* <Button onClick={handleEditOpen}>
          <EditIcon className={classes.buttonIcon} />
          Edit
        </Button>
        <Button>
          <AttachMoneyIcon className={classes.buttonIcon} />
          Create Invoice
        </Button>
        <Button>
          <ReceiptIcon className={classes.buttonIcon} />
          Generate Due Invoices
        </Button> */}
      </CardActions>
    </Card>
  );
};

Invoices.propTypes = {
  className: PropTypes.string,
  customer: PropTypes.object.isRequired
};

export default Invoices;
