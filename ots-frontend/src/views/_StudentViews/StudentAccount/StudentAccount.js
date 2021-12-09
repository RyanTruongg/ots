import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';

import { Page } from 'components';
import { Header, Summary, Invoices, Logs } from './components';

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

const StudentAccount = props => {
  const { match, history } = props;
  const classes = useStyles();
  const { tab } = match.params;

  const handleTabsChange = (event, value) => {
    history.push(value);
  };

  const tabs = [
    { value: 'info', label: 'Thông tin' },
    { value: 'transactions', label: 'Lịch sử giao dịch' },
    { value: 'charge', label: 'Hướng dẫn nạp tiền' }
  ];

  if (!tab) {
    return <Redirect to={'/student/info/info'} />;
  }

  if (!tabs.find(t => t.value === tab)) {
    return <Redirect to="/errors/error-404" />;
  }

  return (
    <Page className={classes.root} title="Thông tin học viên">
      <Header />
      <Tabs
        className={classes.tabs}
        onChange={handleTabsChange}
        scrollButtons="auto"
        value={tab}
        variant="scrollable">
        {tabs.map(tab => (
          <Tab key={tab.value} label={tab.label} value={tab.value} />
        ))}
      </Tabs>
      <Divider className={classes.divider} />
      <div className={classes.content}>
        {tab === 'info' && <Summary />}
        {tab === 'transactions' && <Invoices />}
        {tab === 'charge' && <Logs />}
      </div>
    </Page>
  );
};

StudentAccount.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default StudentAccount;
