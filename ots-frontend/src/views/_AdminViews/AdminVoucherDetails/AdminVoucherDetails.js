import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, colors } from '@material-ui/core';

import { Page } from 'components';
import { Header, Summary } from './components';
import VoucherService from 'services/voucher.service';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  tabs: {
    marginTop: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  content: {
    marginTop: theme.spacing(3)
  }
}));

const AdminVoucherDetails = props => {
  const { match, history } = props;
  const classes = useStyles();
  const { id, tab } = match.params;

  const [voucher, setVoucher] = useState(null);

  useEffect(() => {
    VoucherService._getOne(id).then(res => setVoucher(res.data.voucher));
  }, []);

  if (!voucher) return null;

  return (
    <Page className={classes.root} title="Chi viết voucher">
      <Header voucher={voucher} />

      <Divider className={classes.divider} />
      <div className={classes.content}>
        <Summary voucher={voucher} />
      </div>
    </Page>
  );
};

AdminVoucherDetails.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default AdminVoucherDetails;
