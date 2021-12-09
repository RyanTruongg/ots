import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { CustomerInfo, Invoices, OtherActions } from './components';
import StaffService from 'services/staff.service';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Overview = props => {
  const { className, staff_id, ...rest } = props;

  const classes = useStyles();
  const [staff, setStaff] = useState(null);

  useEffect(() => {
    StaffService._getOne(staff_id).then(res => setStaff(res.data.staff));
  }, []);

  if (!staff) {
    return null;
  }

  return (
    <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}>
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <CustomerInfo setStaff={setStaff} staff={staff} />
      </Grid>
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <Invoices staff={staff} />
      </Grid>
      {/* <Grid item lg={4} md={6} xl={3} xs={12}>
        <SendEmails customer={customer} />
      </Grid> */}
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <OtherActions setStaff={setStaff} staff={staff} />
      </Grid>
    </Grid>
  );
};

Overview.propTypes = {
  className: PropTypes.string,
  staff_id: PropTypes.string
};

export default Overview;
