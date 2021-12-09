import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

import { Paginate } from 'components';
import { CourseCard } from './components';
import CourseService from 'services/course.service';

const useStyles = makeStyles(theme => ({
  root: {},
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2)
  },
  title: {
    position: 'relative',
    '&:after': {
      position: 'absolute',
      bottom: -8,
      left: 0,
      content: '" "',
      height: 3,
      width: 48,
      backgroundColor: theme.palette.primary.main
    }
  },
  actions: {
    display: 'flex',
    alignItems: 'center'
  },
  sortButton: {
    textTransform: 'none',
    letterSpacing: 0,
    marginRight: theme.spacing(2)
  },
  paginate: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  }
}));

const Projects = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [mode, setMode] = useState('grid');
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    CourseService._getAll().then(res => setCourses(res.data.courses));
  }, []);

  const handleModeChange = (event, value) => {
    setMode(value);
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.header}>
        <Typography className={classes.title} variant="h5">
          Có {courses.length} khóa học
        </Typography>
        <div className={classes.actions}>
          <ToggleButtonGroup
            exclusive
            onChange={handleModeChange}
            size="small"
            value={mode}>
            <ToggleButton value="grid">
              <ViewModuleIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <Grid container spacing={3}>
        {courses.map(course => (
          <Grid
            item
            key={course.id}
            md={mode === 'grid' ? 4 : 12}
            sm={mode === 'grid' ? 6 : 12}
            xs={12}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.paginate}>
        <Paginate pageCount={1} />
      </div>
    </div>
  );
};

Projects.propTypes = {
  className: PropTypes.string
};

export default Projects;
