import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Card, Grid, TextField } from '@material-ui/core';

import { Page } from 'components';
import {
  Header,
  Overview,
  FinancialStats,
  FinancialStatsQuarter
} from './components';
import TransactionService from 'services/transaction.service';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    '& > *': {
      height: '100%'
    }
  },
  card: {
    padding: '1rem'
  }
}));

const AdminFinancialReport = () => {
  const classes = useStyles();

  const [report, setReport] = useState(null);
  const [year, setYear] = useState(new Date().getFullYear());

  const fetchData = () => {
    TransactionService._getReport(year).then(res => setReport(res.data.report));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Page className={classes.root} title="Báo cáo thu chi">
      <Header />
      <Grid className={classes.container} container spacing={3}>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <TextField
              label="Năm"
              onChange={e => setYear(e.target.value)}
              size="small"
              type="number"
              value={year}
              variant="outlined"
            />
            <Button
              color="primary"
              onClick={fetchData}
              style={{ marginLeft: '0.5rem' }}
              variant="contained">
              Lấy thông tin
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Overview report={report} />
        </Grid>
        <Grid item xs={12}>
          <FinancialStats report={report} />
        </Grid>
        <Grid item xs={12}>
          <FinancialStatsQuarter report={report} />
        </Grid>
      </Grid>
    </Page>
  );
};

export default AdminFinancialReport;
