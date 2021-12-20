import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { Page } from 'components';
import { Header, Results } from './components';
import VoucherService from 'services/voucher.service';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  }
}));

const AdminVouchers = () => {
  const classes = useStyles();

  const [vouchers, setVouchers] = useState([]);

  useEffect(() => {
    VoucherService._getAll().then(res => setVouchers(res.data.vouchers));
  }, []);

  // const handleFilter = () => {};
  // const handleSearch = () => {};

  return (
    <Page className={classes.root} title="Quản lý voucher">
      <Header />
      {vouchers && <Results className={classes.results} vouchers={vouchers} />}
    </Page>
  );
};

export default AdminVouchers;
