import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Page } from 'components';
import { Results } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(1)
  }
}));

const EduQVCourses = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Kế quả học tập">
      <Results className={classes.results} />
    </Page>
  );
};

export default EduQVCourses;
