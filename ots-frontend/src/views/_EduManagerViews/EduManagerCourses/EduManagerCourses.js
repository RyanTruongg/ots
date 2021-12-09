import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Page } from 'components';
import { Header, Results } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  header: {
    marginBottom: theme.spacing(3)
  },

  results: {
    marginTop: theme.spacing(6)
  }
}));

const EduManagerCourses = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Danh sách khóa học">
      <Header className={classes.header} />
      <Results className={classes.results} />
    </Page>
  );
};

export default EduManagerCourses;
