import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Divider,
  Switch,
  TextField,
  Typography,
  colors
} from '@material-ui/core';

import SuccessSnackbar from '../SuccessSnackbar';

const useStyles = makeStyles(theme => ({
  root: {},
  saveButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  }
}));

const GeneralSettings = props => {
  const { profile, className, ...rest } = props;

  const classes = useStyles();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const states = ['Alabama', 'New York', 'San Francisco'];

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form onSubmit={handleSubmit}>
        <CardHeader title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={4}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Course Name"
                name=""
                onChange={() => {}}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Price"
                name=""
                onChange={() => {}}
                required
                type="number"
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Max students"
                name=""
                onChange={() => {}}
                required
                type="number"
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                // label="Start"
                helperText="Start date"
                name=""
                onChange={() => {}}
                type="date"
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                // label="Start"
                helperText="End date"
                name=""
                onChange={() => {}}
                type="date"
                variant="outlined"
              />
            </Grid>
            {/* <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Select State"
                name="state"
                onChange={() => {}}
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={''}
                variant="outlined">
                {states.map(state => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Country"
                name="country"
                onChange={() => {}}
                required
                value={''}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography variant="h6">Make Contact Info Public</Typography>
              <Typography variant="body2">
                Means that anyone viewing your profile will be able to see your
                contacts details
              </Typography>
              <Switch
                checked={''}
                color="secondary"
                edge="start"
                name="isPublic"
                onChange={() => {}}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography variant="h6">Available to hire</Typography>
              <Typography variant="body2">
                Toggling this will let your teamates know that you are available
                for acquireing new projects
              </Typography>
              <Switch
                checked={''}
                color="secondary"
                edge="start"
                name="canHire"
                onChange={() => {}}
              />
            </Grid> */}
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            className={classes.saveButton}
            type="submit"
            variant="contained">
            Save Changes
          </Button>
        </CardActions>
      </form>
      <SuccessSnackbar onClose={handleSnackbarClose} open={openSnackbar} />
    </Card>
  );
};

GeneralSettings.propTypes = {
  className: PropTypes.string,
  profile: PropTypes.object.isRequired
};

export default GeneralSettings;
