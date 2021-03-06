import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Link,
  Typography,
  colors
} from '@material-ui/core';

import getInitials from 'utils/getInitials';
import { Label } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  header: {
    paddingBottom: 0
  },
  content: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0
    }
  },
  description: {
    padding: theme.spacing(2, 3, 1, 3)
  },
  tags: {
    padding: theme.spacing(0, 3, 1, 3),
    '& > * + *': {
      marginLeft: theme.spacing(1)
    }
  },
  learnMoreButton: {
    marginLeft: theme.spacing(2)
  },
  likedButton: {
    color: colors.red[600]
  },
  shareButton: {
    marginLeft: theme.spacing(1)
  },
  details: {
    padding: theme.spacing(1, 3)
  }
}));

const CourseCard = props => {
  const { course, className, ...rest } = props;

  const classes = useStyles();

  if (!course) {
    return <p>Something wrongs</p>;
  }

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        avatar={
          <Avatar alt="Author" src={course.author.avatar}>
            {getInitials(course.author.name)}
          </Avatar>
        }
        className={classes.header}
        disableTypography
        subheader={
          <Typography variant="body2">
            by{' '}
            <Link
              color="textPrimary"
              component={RouterLink}
              to="/profile/1/timeline"
              variant="h6">
              {course.author.name}
            </Link>{' '}
          </Typography>
        }
        title={
          <Link
            color="textPrimary"
            component={RouterLink}
            to="/courses/1/overview"
            variant="h5">
            {course.title}
          </Link>
        }
      />
      <CardContent className={classes.content}>
        <div className={classes.description}>
          <Typography colo="textSecondary" variant="subtitle2">
            We're looking for experienced Developers and Product Designers to
            come aboard and help us build succesful businesses through softare.
          </Typography>
        </div>
        <div className={classes.tags}>
          {course.tags.map(tag => (
            <Label color={tag.color} key={tag.text}>
              {tag.text}
            </Label>
          ))}
        </div>
        <Divider />
        <div className={classes.details}>
          <Grid
            alignItems="center"
            container
            justify="space-between"
            spacing={3}>
            <Grid item>
              <Typography variant="h5">50</Typography>
              <Typography variant="body2">Max students</Typography>
            </Grid>

            <Grid item>
              <Typography variant="h5">30</Typography>
              <Typography variant="body2">Enrolled Students</Typography>
            </Grid>

            <Grid item>
              <Typography variant="h5">{new Date().toDateString()}</Typography>
              <Typography variant="body2">Start date</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">{new Date().toDateString()}</Typography>
              <Typography variant="body2">End date</Typography>
            </Grid>

            <Grid item>
              <Typography variant="h5">Opening</Typography>
              <Typography variant="body2">Status</Typography>
            </Grid>
          </Grid>
        </div>
      </CardContent>
    </Card>
  );
};

CourseCard.propTypes = {
  className: PropTypes.string,
  course: PropTypes.object.isRequired
};

export default CourseCard;
