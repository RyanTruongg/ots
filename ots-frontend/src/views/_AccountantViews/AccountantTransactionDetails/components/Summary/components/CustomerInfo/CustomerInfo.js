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
  TableCell,
  colors
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import { Label } from 'components';
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
  const { customer, className, ...rest } = props;

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
      <CardHeader title="Transaction info" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow selected>
              <TableCell>Created at</TableCell>
              <TableCell>{new Date().toUTCString()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>{customer.email}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Amount</TableCell>
              <TableCell>500000VND</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Message</TableCell>
              <TableCell>{customer.email}</TableCell>
            </TableRow>

            <TableRow selected>
              <TableCell>Type</TableCell>
              <TableCell>
                {Math.random() > 0.5 ? (
                  <Label color={colors.green[600]}>Income</Label>
                ) : (
                  <Label color={colors.red[600]}>Outgo</Label>
                )}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Update requested</TableCell>
              <TableCell>
                {Math.random() > 0.5 ? (
                  <Label color={colors.orange[600]}>Yes</Label>
                ) : (
                  <Label color={colors.grey[600]}>No</Label>
                )}
              </TableCell>
            </TableRow>
            {/* <TableRow selected>
              <TableCell>Phone</TableCell>
              <TableCell>{customer.phone}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>State/Region</TableCell>
              <TableCell>{customer.state}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Country</TableCell>
              <TableCell>{customer.country}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address 1</TableCell>
              <TableCell>{customer.address1}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Address 2</TableCell>
              <TableCell>{customer.address2}</TableCell>
            </TableRow> */}
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
        customer={customer}
        onClose={handleEditClose}
        open={openEdit}
      />
    </Card>
  );
};

CustomerInfo.propTypes = {
  className: PropTypes.string,
  customer: PropTypes.object.isRequired
};

export default CustomerInfo;
