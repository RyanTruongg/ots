import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Grid,
  Button,
  colors,
  Popover,
  Box
} from '@material-ui/core';

import { Label } from 'components';
import { Application } from './components';

const useStyles = makeStyles(theme => ({
  root: {},
  label: {
    marginTop: theme.spacing(1)
  },
  shareButton: {
    marginRight: theme.spacing(2)
  },
  shareIcon: {
    marginRight: theme.spacing(1)
  },
  applyButton: {
    color: colors.red[600],
    borderColor: colors.red[600],
    backgroundColor: 'white'
  },
  confirmDelete: {
    padding: '0.5rem'
  }
}));

const Header = props => {
  const { project, className, ...rest } = props;

  const classes = useStyles();

  const [openApplication, setOpenApplication] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleApplicationClose = () => {
    setOpenApplication(false);
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid alignItems="flex-end" container justify="space-between" spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            Browse projects
          </Typography>
          <Typography component="h1" gutterBottom variant="h3">
            {project.title}
          </Typography>
          <Label
            className={classes.label}
            color={colors.green[600]}
            variant="outlined">
            Active project
          </Label>
        </Grid>
        <Grid item>
          <Button
            className={classes.applyButton}
            onClick={handleClick}
            variant="outlined">
            Delete
          </Button>
          <Popover
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            onClose={handleClose}
            open={anchorEl}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}>
            <Box className={classes.confirmDelete}>
              <Typography gutterBottom>Delete this course?</Typography>
              <Button variant="outlined">Cancel</Button>
              <Button style={{ marginLeft: '0.5rem', color: colors.red[600] }}>
                Confirm
              </Button>
            </Box>
          </Popover>
        </Grid>
      </Grid>
      <Application
        author={project.author}
        onApply={handleApplicationClose}
        onClose={handleApplicationClose}
        open={openApplication}
      />
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  project: PropTypes.object.isRequired
};

Header.defaultProps = {};

export default Header;
