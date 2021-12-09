import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { Page } from 'components';
import { Header, Results } from './components';
import TransactionService from 'services/transaction.service';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  }
}));

const AccountantTransactions = () => {
  const classes = useStyles();

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    TransactionService._getAll().then(res => {
      setTransactions(res.data.transactions);
    });
  }, []);

  // const handleFilter = () => {};
  // const handleSearch = () => {};

  return (
    <Page className={classes.root} title="Quản lý giao dịch">
      <Header />
      {/* <SearchBar onFilter={handleFilter} onSearch={handleSearch} /> */}
      {transactions && (
        <Results className={classes.results} transactions={transactions} />
      )}
    </Page>
  );
};

export default AccountantTransactions;
