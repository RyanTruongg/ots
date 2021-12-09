import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { Results } from './components';
import EnrollmentService from 'services/enrollment.service';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  }
}));

const CourseResults = props => {
  // eslint-disable-next-line react/prop-types
  const { course_id } = props;
  const classes = useStyles();

  const [students, setStudents] = useState([]);

  const fetchStudents = () => {
    EnrollmentService._getAllStudentInCourse(course_id).then(res =>
      setStudents(res.data.students)
    );
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
      {students && (
        <Results
          className={classes.results}
          fetchStudents={fetchStudents}
          students={students}
        />
      )}
    </>
  );
};

export default CourseResults;
