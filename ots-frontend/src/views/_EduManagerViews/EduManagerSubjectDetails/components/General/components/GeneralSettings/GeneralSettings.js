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
  TextField,
  Typography,
  colors,
  MenuItem,
  Box,
  Popover
} from '@material-ui/core';

import SuccessSnackbar from '../SuccessSnackbar';
import { useForm } from 'react-hook-form';
import levelMap from 'constants/levelMap';
import SubjectService from 'services/subject.service';

const useStyles = makeStyles(theme => ({
  root: {},
  saveButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  },
  confirmDelete: {
    padding: '0.5rem'
  },
  deleteButton: {
    color: colors.red[600],
    borderColor: colors.red[600],
    backgroundColor: 'white'
  }
}));

const GeneralSettings = props => {
  const { className, subject, ...rest } = props;

  const classes = useStyles();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const form = useForm();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSubmit = data => {
    return SubjectService._updateOne(subject.id, data)
      .then(() => alert('Cập nhật thành công'))
      .catch(() => alert('Lối'));
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardHeader title="Thông tin môn học" />
        <Divider />
        <CardContent>
          <Grid container spacing={4}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Tên môn học"
                {...form.register('name')}
                defaultValue={subject.name}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Độ khó"
                {...form.register('level')}
                defaultValue={subject.level}
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
                defaultValue={subject.description}
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
            disabled={form.formState.isSubmitting}
            type="submit"
            variant="contained">
            Lưu thay đổi
          </Button>
          <Button
            className={classes.deleteButton}
            onClick={handleClick}
            variant="outlined">
            Xóa
          </Button>
          <Popover
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
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
              <Button onClick={handleClose} variant="outlined">
                Hủy
              </Button>
              <Button style={{ marginLeft: '0.5rem', color: colors.red[600] }}>
                Xác nhận
              </Button>
            </Box>
          </Popover>
        </CardActions>
      </form>
      <SuccessSnackbar onClose={handleSnackbarClose} open={openSnackbar} />
    </Card>
  );
};

GeneralSettings.propTypes = {
  className: PropTypes.string,
  subject: PropTypes.object.isRequired
};

export default GeneralSettings;
