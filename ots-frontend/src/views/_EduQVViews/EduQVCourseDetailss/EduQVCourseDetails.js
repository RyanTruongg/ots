import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Divider, colors } from '@material-ui/core';

import axios from 'utils/axios';
import { Page } from 'components';
import {
  Header,
  Activities,
  Subscribers,
  General,
  CourseResults
} from './components';

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

const EduQVCourseDetails = props => {
  const { match, history } = props;
  const classes = useStyles();
  const { id, tab } = match.params;
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = () => {
      axios.get('/api/projects/1').then(response => {
        setProject(response.data.project);
      });
    };

    fetchProject();
  }, []);

  const handleTabsChange = (event, value) => {
    history.push(value);
  };

  const tabs = [
    { value: 'overview', label: 'Tổng quan' },
    { value: 'activity', label: 'Hoạt động' },
    { value: 'results', label: 'Kết quả học tập' },
    { value: 'subscribers', label: 'Subscribers' }
  ];

  if (!tab) {
    return <Redirect to={`/student/courses/${id}/overview`} />;
  }

  if (!tabs.find(t => t.value === tab)) {
    return <Redirect to="/errors/error-404" />;
  }

  if (!project) {
    return null;
  }

  return (
    <Page className={classes.root} title="Thông tin khóa học">
      <Header project={project} />
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
        {tab === 'overview' && <General project={project} />}
        {tab === 'activity' && <Activities activities={project.activities} />}
        {tab === 'results' && <CourseResults files={project.files} />}
        {tab === 'subscribers' && (
          <Subscribers subscribers={project.subscribers} />
        )}
      </div>
    </Page>
  );
};

EduQVCourseDetails.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default EduQVCourseDetails;
