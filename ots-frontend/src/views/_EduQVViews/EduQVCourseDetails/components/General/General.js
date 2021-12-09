import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid } from '@material-ui/core';

import { Markdown } from 'components';
import { CourseCard } from './components';

const useStyles = makeStyles(() => ({
  root: {}
}));

const General = props => {
  const { className, course, ...rest } = props;

  const classes = useStyles();

  if (!course) {
    return null;
  }

  return (
    <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}>
      <Grid item lg={8} md={6} xl={9} xs={12}>
        <Card>
          <CardContent>
            <Markdown source={'### Mô tả môn học \n' + course.description} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <CourseCard course={course} />
      </Grid>
    </Grid>
  );
};

General.propTypes = {
  className: PropTypes.string,
  course: PropTypes.object.isRequired
};

export default General;
