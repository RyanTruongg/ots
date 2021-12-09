import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';

import { Page } from 'components';
import { Header, Activities, Subscribers, General, Files } from './components';
import EnrollmentService from 'services/enrollment.service';
import { useAuth } from 'hooks/use-auth';
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

const StudentEnrolledCourseDetails = props => {
  const { match, history } = props;
  const classes = useStyles();
  const { id, tab } = match.params;
  const [course, setCourse] = useState(null);

  const [enrolled, setEnrolled] = useState(null);
  const auth = useAuth();

  const checkEnrollment = () => {
    if (auth.user?.user_id) {
      EnrollmentService._getOne(auth.user?.user_id, id).then(res => {
        setEnrolled(res.data.enrollment ? true : false);
      });
    }
  };

  useEffect(() => {
    checkEnrollment();
  }, []);

  useEffect(() => {
    CourseService._getOne(id).then(res => setCourse(res.data.course));
  }, []);

  const handleTabsChange = (event, value) => {
    history.push(value);
  };

  const tabs = [
    { value: 'overview', label: 'Tổng quan' },
    { value: 'activity', label: 'Hoạt động' },
    { value: 'files', label: 'Nộp bài cuối kỳ' },
    { value: 'feedback', label: 'Đánh giá khóa học' }
  ];

  if (enrolled === false) return <Redirect to={'/student/courses/' + id} />;

  if (!tab) {
    return <Redirect to={`/student/enrolled-courses/${id}/overview`} />;
  }

  if (!tabs.find(t => t.value === tab)) {
    return <Redirect to="/errors/error-404" />;
  }

  if (!course) {
    return null;
  }

  return (
    <Page className={classes.root} title="Thông tin khóa học">
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
        {tab === 'files' && <Files files={[]} />}
        {tab === 'feedback' && <Subscribers subscribers={[]} />}
      </div>
    </Page>
  );
};

StudentEnrolledCourseDetails.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default StudentEnrolledCourseDetails;
