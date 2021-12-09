import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent, Divider } from '@material-ui/core';

import { Chart } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    padding: 0
  },
  inner: {
    minWidth: 700
  },
  chart: {
    padding: theme.spacing(4, 2, 0, 2),
    height: 400
  }
}));

const FinancialStatsQuarter = props => {
  const { className, report, ...rest } = props;

  const classes = useStyles();

  const incomeByMonth = new Array(12).fill(0);
  const outgoByMonth = new Array(12).fill(0);

  const incomeByQuart = new Array(4).fill(0);
  const outgoByQuart = new Array(4).fill(0);

  if (report) {
    report.forEach(e => {
      const { month, sum, type } = e;
      if (type === 'income') {
        incomeByMonth[month - 1] += sum;
      }
      if (type === 'outgo') {
        outgoByMonth[month - 1] += sum;
      }
    });

    incomeByMonth.forEach((e, i) => {
      incomeByQuart[Math.floor(i / 3)] += e;
    });

    outgoByMonth.forEach((e, i) => {
      outgoByQuart[Math.floor(i / 3)] += e;
    });
  }

  const data = {
    thisYear: incomeByQuart,
    lastYear: outgoByQuart
  };

  const labels = ['Q1', 'Q2', 'Q3', 'Q4'];

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader title="Thu chi theo quý" />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Chart className={classes.chart} data={data} labels={labels} />
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

FinancialStatsQuarter.propTypes = {
  className: PropTypes.string,
  report: PropTypes.array.isRequired
};

export default FinancialStatsQuarter;
