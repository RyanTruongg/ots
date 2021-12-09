import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2)
  },
  content: {
    padding: theme.spacing(2),
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexWrap: 'wrap'
    },
    '&:last-child': {
      paddingBottom: theme.spacing(2)
    }
  },
  header: {
    maxWidth: '100%',
    width: 240,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
      flexBasis: '100%'
    }
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  stats: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      flexBasis: '50%'
    }
  },
  actions: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      flexBasis: '50%'
    }
  }
}));

const ProjectCard = props => {
  const { project, className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <Grid container>
          <Grid item lg={3} xs={6}>
            <Typography variant="h6">{project.name}</Typography>
          </Grid>
          <Grid item lg={3} xs={6}>
            <Typography variant="h6">
              {String(project.level).toLocaleUpperCase()}
            </Typography>
            <Typography variant="body2">Độ khó</Typography>
          </Grid>
          <Grid item lg={3} xs={6}>
            <Typography variant="h6">{project.description}</Typography>
            <Typography variant="body2">Mô tả</Typography>
          </Grid>
          <Grid
            item
            justifyContent="flex-end"
            lg={3}
            style={{ display: 'flex' }}
            xs={6}>
            <Link to={'/edu-manager/subjects/' + project.id}>
              <Button color="primary" size="small" variant="outlined">
                Chi tiết
              </Button>
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

ProjectCard.propTypes = {
  className: PropTypes.string,
  project: PropTypes.object.isRequired
};

export default ProjectCard;
