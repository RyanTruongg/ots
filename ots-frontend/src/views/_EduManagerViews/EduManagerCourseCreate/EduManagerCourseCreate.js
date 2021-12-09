import React, { useEffect, useState } from 'react';
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
import { useForm } from 'react-hook-form';
import StaffService from 'services/staff.service';
import SubjectService from 'services/subject.service';
import CourseService from 'services/course.service';

const useStyles = makeStyles(() => ({
  root: {
    padding: '1rem'
  }
}));

const EduManagerCourseCreate = () => {
  const classes = useStyles();

  // const [openSnackbar, setOpenSnackbar] = useState(false);
  const [instructors, setInstructors] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const form = useForm();

  const onSubmit = data => {
    CourseService._createOne(data)
      .then(() => alert('Tạo khóa học thành công'))
      .catch(() => alert('Lỗi'));
  };

  useEffect(() => {
    StaffService._getAllByRole('instructor').then(res =>
      setInstructors(res.data.staffs)
    );

    SubjectService._getAll().then(res => setSubjects(res.data.subjects));
  }, []);

  // const handleSnackbarClose = () => {
  //   setOpenSnackbar(false);
  // };

  return (
    <Page className={classes.root} title="Tạo khóa học">
      <Card>
        <form autoComplete="off" onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader title="Tạo khóa học" />
          <Divider />
          <CardContent>
            <Grid container spacing={4}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Tên khóa học"
                  {...form.register('name')}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Giá"
                  {...form.register('price')}
                  required
                  type="number"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Số lượng học sinh tối đa"
                  {...form.register('max_student')}
                  required
                  type="number"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                  label="Ngày bắt đầu"
                  {...form.register('start_date')}
                  type="date"
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  InputLabelProps={{
                    shrink: true
                  }}
                  fullWidth
                  label="Ngày kết thúc"
                  {...form.register('end_date')}
                  type="date"
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Lịch học"
                  {...form.register('schedule')}
                  required
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Giảng viên"
                  select
                  {...form.register('instructor_id')}
                  required
                  variant="outlined">
                  {instructors.map(instructor => (
                    <MenuItem key={instructor.uid} value={instructor.uid}>
                      {instructor.displayName}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Môn học"
                  select
                  {...form.register('subject_id')}
                  required
                  variant="outlined">
                  {subjects.map(subject => (
                    <MenuItem key={subject.id} value={subject.id}>
                      {subject.name}
                    </MenuItem>
                  ))}
                </TextField>
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
        {/* <SuccessSnackbar onClose={handleSnackbarClose} open={openSnackbar} /> */}
      </Card>
    </Page>
  );
};

export default EduManagerCourseCreate;
