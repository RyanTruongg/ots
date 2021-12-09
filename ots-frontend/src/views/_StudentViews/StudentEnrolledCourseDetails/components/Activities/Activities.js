import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

import { Activity } from './components';
import uuid from 'uuid/v1';

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

const mockActivities = [
  {
    id: uuid(),
    subject: 'Project owner',
    subject_type: 'user',
    action_type: 'upload_file',
    action_desc: 'has uploaded a new file',
    created_at: moment().subtract(23, 'minutes')
  },
  {
    id: uuid(),
    subject: 'Adrian Stefan',
    subject_type: 'user',
    action_type: 'join_team',
    action_desc: 'joined team as a Front-End Developer',
    created_at: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    subject: 'Alexandru Robert',
    action_type: 'join_team',
    action_desc: 'joined team as a Full Stack Developer',
    created_at: moment().subtract(9, 'hours')
  },
  {
    id: uuid(),
    subject: 'Project owner',
    subject_type: 'user',
    action_type: 'price_change',
    action_desc: 'raised the project budget',
    created_at: moment().subtract(2, 'days')
  },
  {
    id: uuid(),
    subject: 'Contest',
    subject_type: 'project',
    action_type: 'contest_created',
    action_desc: 'created',
    created_at: moment().subtract(4, 'days')
  }
];

const Activities = props => {
  const { activities = mockActivities, className, ...rest } = props;

  const classes = useStyles();

  const todayItems = [];
  const lastWeekItems = [];

  for (const activity of mockActivities) {
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
