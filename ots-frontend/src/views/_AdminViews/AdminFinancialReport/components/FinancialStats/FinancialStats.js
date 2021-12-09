import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent, Divider } from '@material-ui/core';

import { GenericMoreButton } from 'components';
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

const FinancialStats = props => {
  const { className, report, ...rest } = props;

  const classes = useStyles();

  const incomeByMonth = new Array(12).fill(0);
  const outgoByMonth = new Array(12).fill(0);

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
  }

  const data = {
    thisYear: incomeByMonth,
    lastYear: outgoByMonth
  };

  const labels = [
    'T1',
    'T2',
    'T3',
    'T4',
    'T5',
    'T6',
    'T7',
    'T8',
    'T9',
    'T10',
    'T11',
    'T12'
  ];

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader title="Thu chi theo tháng" />
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

FinancialStats.propTypes = {
  className: PropTypes.string,
  report: PropTypes.array.isRequired
};

export default FinancialStats;
