import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { GeneralSettings } from './components';
import SubjectService from 'services/subject.service';

const useStyles = makeStyles(() => ({
  root: {}
}));

const General = props => {
  const { className, subject_id, ...rest } = props;

  const classes = useStyles();
  const [subject, setSubject] = useState(null);

  useEffect(() => {
    SubjectService._getOne(subject_id).then(res =>
      setSubject(res.data.subject)
    );
  }, []);

  if (!subject) {
    return null;
  }

  return (
    <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}>
      <Grid item lg={8} md={6} xl={9} xs={12}>
        <GeneralSettings subject={subject} />
      </Grid>
    </Grid>
  );
};

General.propTypes = {
  className: PropTypes.string,
  subject_id: PropTypes.string
};

export default General;
