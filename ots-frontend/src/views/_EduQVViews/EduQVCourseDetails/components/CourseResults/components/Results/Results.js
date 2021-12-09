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
  Typography
} from '@material-ui/core';

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
  const { className, students, ...rest } = props;

  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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
                      <TableCell>
                        <a href="https://google.com" target="_blank">
                          project.url
                        </a>
                      </TableCell>

                      <TableCell align="right">
                        <Button color="primary" size="small" variant="outlined">
                          Cấp chứng chỉ
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
