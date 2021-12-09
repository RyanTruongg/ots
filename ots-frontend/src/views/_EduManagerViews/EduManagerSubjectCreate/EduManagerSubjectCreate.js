import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  MenuItem,
  TextField
} from '@material-ui/core';

import { Page } from 'components';
import { SuccessSnackbar } from './components';
import { useForm } from 'react-hook-form';
import levelMap from 'constants/levelMap';
import SubjectService from 'services/subject.service';

const useStyles = makeStyles(() => ({
  root: {
    padding: '1rem'
  }
}));

const EduManagerSubjectCreate = () => {
  const classes = useStyles();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const form = useForm();

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   setOpenSnackbar(true);
  // };

  const onSubmit = data => {
    SubjectService._createOne(data)
      .then(() => alert('Đã tạo môn học'))
      .catch(() => alert('Lỗi'));
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <Page className={classes.root} title="Course Create">
      <Card>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader title="Create course" />
          <Divider />
          <CardContent>
            <Grid container spacing={4}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Tên môn học"
                  {...form.register('name')}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Độ khó"
                  {...form.register('level')}
                  required
                  select
                  variant="outlined">
                  {Object.keys(levelMap).map(key => (
                    <MenuItem value={key}>{levelMap[key]}</MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Mô tả"
                  {...form.register('description')}
                  multiline
                  required
                  rows={8}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              className={classes.saveButton}
              color="primary"
              type="submit"
              variant="contained">
              Tạo
            </Button>
          </CardActions>
        </form>
        <SuccessSnackbar onClose={handleSnackbarClose} open={openSnackbar} />
      </Card>
    </Page>
  );
};

export default EduManagerSubjectCreate;
