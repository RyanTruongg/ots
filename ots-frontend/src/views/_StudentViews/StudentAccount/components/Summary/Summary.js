import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { CustomerInfo } from './components';
import { useAuth } from 'hooks/use-auth';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Summary = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const auth = useAuth();

  if (!auth.user) {
    return null;
  }

  return (
    <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}>
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <CustomerInfo customer={auth.user} />
      </Grid>
      {/* <Grid item lg={4} md={6} xl={3} xs={12}>
        <Invoices customer={auth.user} />
      </Grid> */}
    </Grid>
  );
};

Summary.propTypes = {
  className: PropTypes.string
};

export default Summary;
