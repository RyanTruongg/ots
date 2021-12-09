import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, Typography, Grid } from '@material-ui/core';
import formatter from 'utils/formatter';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  item: {
    padding: theme.spacing(3),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      '&:not(:last-of-type)': {
        borderRight: `1px solid ${theme.palette.divider}`
      }
    },
    [theme.breakpoints.down('sm')]: {
      '&:not(:last-of-type)': {
        borderBottom: `1px solid ${theme.palette.divider}`
      }
    }
  },
  valueContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    marginLeft: theme.spacing(1)
  }
}));

const Overview = props => {
  const { className, report = [], ...rest } = props;

  const classes = useStyles();

  let totalIncome = 0;
  let totalOutgo = 0;

  if (report) {
    report.forEach(e => {
      if (e.type === 'income') totalIncome += e.sum;
      if (e.type === 'outgo') totalOutgo += e.sum;
    });
  }

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <Grid alignItems="center" container justify="space-between">
        <Grid className={classes.item} item sm={6} xs={12}>
          <Typography component="h2" gutterBottom variant="overline">
            Tổng doanh thu
          </Typography>
          <div className={classes.valueContainer}>
            <Typography variant="h3">
              {formatter.format(totalIncome)}
            </Typography>
          </div>
        </Grid>
        <Grid className={classes.item} item sm={6} xs={12}>
          <Typography component="h2" gutterBottom variant="overline">
            Tổng chi phí
          </Typography>
          <div className={classes.valueContainer}>
            <Typography variant="h3">{formatter.format(totalOutgo)}</Typography>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
};

Overview.propTypes = {
  className: PropTypes.string.isRequired,
  report: PropTypes.array.isRequired
};

export default Overview;
