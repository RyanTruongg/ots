import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  Divider,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Modal,
  TextField,
  Grid,
  CardHeader
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import EnrollmentService from 'services/enrollment.service';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 700
  },
  nameCell: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1)
  },
  actions: {
    padding: theme.spacing(1),
    justifyContent: 'flex-end'
  }
}));

const Results = props => {
  const { className, students, fetchStudents, ...rest } = props;

  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [open, setOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const form = useForm();

  const handleClose = () => {
    setOpen(false);
    setEditingStudent(null);
  };

  const onSubmit = data => {
    EnrollmentService._updateOne(editingStudent.enrollment_id, data)
      .then(() => {
        handleClose();
        fetchStudents();
      })
      .catch(() => alert('Lỗi'));
  };

  const openModel = student => {
    setEditingStudent(student);
    form.setValue('average_quiz_score', student.average_quiz_score);
    form.setValue('project_score', student.project_score);
    setOpen(true);
  };

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value);
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography color="textSecondary" gutterBottom variant="body2">
        {students.length} Records found. Page {page + 1} of{' '}
        {Math.ceil(students.length / rowsPerPage)}
      </Typography>
      <Card>
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Tên/Email</TableCell>
                    <TableCell>Điểm quá trình</TableCell>
                    <TableCell>Điểm cuối kỳ</TableCell>
                    <TableCell>Bài cuối kỳ</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {students.slice(0, rowsPerPage).map(student => (
                    <TableRow hover key={student.uid}>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={student.photoURL}
                          />
                          <div>
                            <Typography color="inherit" variant="h6">
                              {student.displayName}
                            </Typography>
                            <div>{student.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {student.average_quiz_score || 'NaN'}
                      </TableCell>
                      <TableCell>{student.project_score || 'NaN'}</TableCell>
                      <TableCell>google.com</TableCell>

                      <TableCell align="right">
                        <Button
                          color="primary"
                          onClick={() => openModel(student)}
                          size="small"
                          variant="outlined">
                          Cập nhật điểm
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={students.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
        <Modal
          onClose={handleClose}
          open={open}
          style={{ display: 'grid', placeItems: 'center' }}>
          <Card>
            <CardHeader
              title={
                <Typography variant="h4">
                  {editingStudent?.displayName}
                </Typography>
              }
            />
            <CardContent>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <Grid container spacing={4}>
                  <Grid item xs={5}>
                    <TextField
                      label="Điểm quá trình"
                      {...form.register('average_quiz_score', {
                        min: 0,
                        max: 10
                      })}
                      inputProps={{ step: 0.01 }}
                      type="number"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      label="Điểm cuối kỳ"
                      {...form.register('project_score', { min: 0, max: 10 })}
                      error={form.formState.errors['project_score']}
                      inputProps={{ step: 0.01 }}
                      type="number"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      color="primary"
                      size="small"
                      type="submit"
                      variant="contained">
                      Cập nhật
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Modal>
      </Card>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  fetchStudents: PropTypes.func.isRequired,
  students: PropTypes.array.isRequired
};

Results.defaultProps = {
  students: []
};

export default Results;
