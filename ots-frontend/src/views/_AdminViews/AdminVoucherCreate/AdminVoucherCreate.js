import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';

import { Page } from 'components';
import { useForm } from 'react-hook-form';
import VoucherService from 'services/voucher.service';

const useStyles = makeStyles(() => ({
  root: {
    padding: '1rem'
  }
}));

const AdminVoucherCreate = () => {
  const classes = useStyles();

  // const [openSnackbar, setOpenSnackbar] = useState(false);
  const form = useForm();

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   // setOpenSnackbar(true);
  // };

  const onSubmit = data => {
    VoucherService._createOne(data).then(() => {
      alert('Tạo voucher mới thành công');
      form.reset();
    });
  };

  // const handleSnackbarClose = () => {
  //   setOpenSnackbar(false);
  // };

  return (
    <Page className={classes.root} title="Course Create">
      <Card>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader title="Voucher mới" />
          <Divider />
          <CardContent>
            <Grid container spacing={4}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Tên"
                  {...form.register('name')}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Code"
                  {...form.register('code')}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Tổng giảm"
                  {...form.register('discount_rate')}
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
                  label="Ngày hết hạn"
                  {...form.register('expire_at')}
                  type="datetime-local"
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
              disabled={form.formState.isSubmitting}
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

export default AdminVoucherCreate;
