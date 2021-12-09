import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import { Page, Paginate } from 'components';
import { Header, ProjectCard } from './components';
import SubjectService from 'services/subject.service';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  },
  paginate: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  }
}));

const EduManagerSubjects = () => {
  const classes = useStyles();
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    SubjectService._getAll().then(res => setSubjects(res.data.subjects));
  }, []);

  return (
    <Page className={classes.root} title="Quản lý môn học">
      <Header />
      <div className={classes.results}>
        <Typography color="textSecondary" gutterBottom variant="body2">
          {subjects.length} môn học
        </Typography>
        {subjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className={classes.paginate}>
        <Paginate pageCount={1} />
      </div>
    </Page>
  );
};

export default EduManagerSubjects;
