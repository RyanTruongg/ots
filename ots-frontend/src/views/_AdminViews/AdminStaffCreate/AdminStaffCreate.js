import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Box,
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
import { useForm } from 'react-hook-form';

import { Page } from 'components';
import StaffService from 'services/staff.service';
import roleMap from 'constants/roleMap';

const useStyles = makeStyles(() => ({
  root: {
    padding: '1rem'
  }
}));

const AdminStaffCreate = () => {
  const classes = useStyles();
  const form = useForm();

  // const [openSnackbar, setOpenSnackbar] = useState(false);

  const onSubmit = data => {
    StaffService._createOne(data)
      .then(() => alert('Tạo tài khoản thành công'))
      .catch(() => alert('Lỗi'));
  };

  // const handleSnackbarClose = () => {
  //   setOpenSnackbar(false);
  // };

  return (
    <Page className={classes.root} title="Tạo tài khoản nhân viên">
      <Card>
        <form autoComplete="off" onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader title="Tạo tài khoản nhân viên" />
          <Divider />
          <CardContent>
            <Grid container spacing={4}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Họ tên"
                  {...form.register('full_name')}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  {...form.register('email')}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Mật khẩu"
                  {...form.register('password')}
                  required
                  type="password"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="SDT"
                  {...form.register('phone')}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Tên ngân hàng"
                  {...form.register('bank_name')}
                  required
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Số tài khoản ngân hàng"
                  {...form.register('bank_account_number')}
                  required
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
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
          <Divider />
          <CardActions>
            <Box display="flex" justifyContent="flex-end">
              <Button
                className={classes.saveButton}
                color="primary"
                type="submit"
                variant="contained">
                Tạo
              </Button>
            </Box>
          </CardActions>
        </form>
        {/* <SuccessSnackbar onClose={handleSnackbarClose} open={openSnackbar} /> */}
      </Card>
    </Page>
  );
};

export default AdminStaffCreate;
