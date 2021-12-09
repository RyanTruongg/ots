import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Modal,
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
  TextField,
  Button,
  colors,
  MenuItem
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import roleMap from 'constants/roleMap';
import StaffService from 'services/staff.service';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    width: 700,
    maxHeight: '100%',
    overflowY: 'auto',
    maxWidth: '100%'
  },
  container: {
    marginTop: theme.spacing(3)
  },
  actions: {
    justifyContent: 'flex-end'
  },
  saveButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  }
}));

const CustomerEdit = props => {
  const { open, onClose, staff, setStaff, className, ...rest } = props;

  const classes = useStyles();
  const form = useForm();

  const onSubmit = async data => {
    return StaffService._updateOne(staff.uid, data)
      .then(res => {
        alert('Cập nhật thành công');
        setStaff(res.data.staff);
        console.log(res.data.staff);
      })
      .catch(() => alert('Cập nhật lỗi'));
  };

  if (!open) {
    return null;
  }

  return (
    <Modal onClose={onClose} open={open}>
      <Card {...rest} className={clsx(classes.root, className)}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <Typography align="center" gutterBottom variant="h3">
              Chỉnh sửa thông tin nhân viên
            </Typography>
            <Grid className={classes.container} container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  defaultValue={staff.displayName}
                  fullWidth
                  label="Họ tên"
                  {...form.register('full_name')}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  defaultValue={staff.email}
                  fullWidth
                  label="Email"
                  {...form.register('email')}
                  required
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  defaultValue={staff.phone}
                  fullWidth
                  label="SDT"
                  {...form.register('phone')}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  defaultValue={staff.bank_name}
                  fullWidth
                  label="Tên ngân hàng"
                  {...form.register('bank_name')}
                  required
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  defaultValue={staff.bank_account_number}
                  fullWidth
                  label="Số tài khoản ngân hàng"
                  {...form.register('bank_account_number')}
                  required
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  defaultValue={staff.customClaims?.role}
                  fullWidth
                  label="Chức vụ"
                  select
                  {...form.register('role')}
                  required
                  variant="outlined">
                  {Object.keys(roleMap).map(key => (
                    <MenuItem key={key} value={key}>
                      {roleMap[key]}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button onClick={onClose} variant="contained">
              Close
            </Button>
            <Button
              className={classes.saveButton}
              disabled={form.formState.isSubmitting}
              onClick={form.handleSubmit(onSubmit)}
              variant="contained">
              Save
            </Button>
          </CardActions>
        </form>
      </Card>
    </Modal>
  );
};

CustomerEdit.displayName = 'CustomerEdit';

CustomerEdit.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  setStaff: PropTypes.func,
  staff: PropTypes.any
};

CustomerEdit.defaultProps = {
  open: false,
  onClose: () => {}
};

export default CustomerEdit;
