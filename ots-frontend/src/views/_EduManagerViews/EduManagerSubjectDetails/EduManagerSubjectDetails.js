import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, colors } from '@material-ui/core';

import { Page } from 'components';
import { Header, General } from './components';

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
  content: {
    marginTop: theme.spacing(3)
  }
}));

const EduManagerSubjectDetails = props => {
  const { match } = props;
  const classes = useStyles();
  const { id } = match.params;

  return (
    <Page className={classes.root} title="Settings">
      <Header />

      <Divider className={classes.divider} />
      <div className={classes.content}>
        <General subject_id={id} />
      </div>
    </Page>
  );
};

EduManagerSubjectDetails.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default EduManagerSubjectDetails;
