import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

import { Activity } from './components';

const useStyles = makeStyles(theme => ({
  root: {},
  title: {
    marginBottom: theme.spacing(3)
  },
  group: {
    '& + &': {
      marginTop: theme.spacing(4)
    }
  },
  activity: {
    marginBottom: '1rem'
  }
}));

const Activities = props => {
  const { activities, className, ...rest } = props;

  const classes = useStyles();

  const todayItems = [];
  const lastWeekItems = [];

  for (const activity of activities) {
    moment(activity.created_at).isSame(moment(), 'day')
      ? todayItems.push(activity)
      : lastWeekItems.push(activity);
  }

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      {todayItems.map(activity => (
        <Activity
          activity={activity}
          className={classes.activity}
          key={activity.id}
        />
      ))}
    </div>
  );
};

Activities.propTypes = {
  activities: PropTypes.array.isRequired,
  className: PropTypes.string
};

export default Activities;
