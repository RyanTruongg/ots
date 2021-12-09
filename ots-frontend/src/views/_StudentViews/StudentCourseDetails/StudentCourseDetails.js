import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, colors } from '@material-ui/core';

import { Page } from 'components';
import { Header, General } from './components';
import CourseService from 'services/course.service';
import { useAuth } from 'hooks/use-auth';
import EnrollmentService from 'services/enrollment.service';
import { Redirect } from 'react-router';

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

const StudentCourseDetails = props => {
  // eslint-disable-next-line no-unused-vars
  const { match, history } = props;
  const classes = useStyles();
  const [course, setCourse] = useState(null);
  const { id } = match.params;

  const auth = useAuth();

  useEffect(() => {
    CourseService._getOne(id).then(res => setCourse(res.data.course));
  }, []);

  const [enrolled, setEnrolled] = useState(null);

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

  if (enrolled) return <Redirect to={'/student/enrolled-courses/' + id} />;

  if (!course) return null;

  return (
    <Page className={classes.root} title="Thông tin khóa học">
      <Header course={course} />

      <Divider className={classes.divider} />
      <div className={classes.content}>
        <General checkEnrollment={checkEnrollment} course={course} />
      </div>
    </Page>
  );
};

StudentCourseDetails.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default StudentCourseDetails;
