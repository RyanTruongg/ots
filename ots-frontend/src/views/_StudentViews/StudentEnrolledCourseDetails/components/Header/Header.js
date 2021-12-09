import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, colors } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  label: {
    marginTop: theme.spacing(1)
  },
  shareButton: {
    marginRight: theme.spacing(2)
  },
  shareIcon: {
    marginRight: theme.spacing(1)
  },
  applyButton: {
    color: colors.red[600],
    borderColor: colors.red[600],
    backgroundColor: 'white'
  },
  confirmDelete: {
    padding: '0.5rem'
  }
}));

const Header = props => {
  const { className, course, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            Khóa học
          </Typography>
          <Typography component="h1" gutterBottom variant="h3">
            {course.name}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  course: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired
};

Header.defaultProps = {};

export default Header;
