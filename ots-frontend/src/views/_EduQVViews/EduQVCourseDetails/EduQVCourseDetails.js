import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';

import { Page } from 'components';
import { Header, Activities, General, CourseResults } from './components';
import CourseService from 'services/course.service';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  tabs: {
    marginTop: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  alert: {
    marginTop: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(3)
  }
}));

const InstructorCourseDetails = props => {
  const { match, history } = props;
  const classes = useStyles();
  const { id, tab } = match.params;
  const [course, setCourse] = useState(null);

  const handleTabsChange = (event, value) => {
    history.push(value);
  };

  useEffect(() => {
    CourseService._getOne(id).then(res => setCourse(res.data.course));
  }, []);

  const tabs = [
    { value: 'overview', label: 'Tổng quan' },
    { value: 'activity', label: 'Hoạt động' },
    { value: 'results', label: 'Kết quả học tập' }
  ];

  if (!tab) {
    return <Redirect to={`/instructor/courses/${id}/overview`} />;
  }

  if (!tabs.find(t => t.value === tab)) {
    return <Redirect to="/errors/error-404" />;
  }

  if (!course) {
    return null;
  }

  return (
    <Page className={classes.root} title="Khóa học">
      <Header course={course} />
      <Tabs
        className={classes.tabs}
        onChange={handleTabsChange}
        scrollButtons="auto"
        value={tab}
        variant="scrollable">
        {tabs.map(tab => (
          <Tab key={tab.value} label={tab.label} value={tab.value} />
        ))}
      </Tabs>
      <Divider className={classes.divider} />
      <div className={classes.content}>
        {tab === 'overview' && <General course={course} />}
        {tab === 'activity' && <Activities activities={[]} />}
        {tab === 'results' && <CourseResults course_id={id} files={[]} />}
      </div>
    </Page>
  );
};

InstructorCourseDetails.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default InstructorCourseDetails;
