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
  MenuItem,
  TextField
} from '@material-ui/core';

import { Page } from 'components';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/use-auth';
import TransactionService from 'services/transaction.service';

const useStyles = makeStyles(() => ({
  root: {
    padding: '1rem'
  }
}));

const AccountantTransactionCreate = () => {
  const classes = useStyles();

  // const [openSnackbar, setOpenSnackbar] = useState(false);
  const form = useForm();

  const auth = useAuth();

  const type = form.watch('type');

  const onSubmit = data => {
    data.accountant_id = auth.user?.user_id;
    return TransactionService._createOne(data)
      .then(() => {
        alert('Ghi nhận thành công');
        form.reset();
      })
      .catch(() => alert('Lỗi'));
  };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   setOpenSnackbar(true);
  // };

  // const handleSnackbarClose = () => {
  //   setOpenSnackbar(false);
  // };

  return (
    <Page className={classes.root} title="Course Create">
      <Card>
        <form autoComplete="off" onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader title="Ghi nhận giao dịch" />
          <Divider />
          <CardContent>
            <Grid container spacing={4}>
              {type === 'income' && (
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    {...form.register('email')}
                    required
                    variant="outlined"
                  />
                </Grid>
              )}

              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Nội dung"
                  {...form.register('message')}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Loại"
                  select
                  {...form.register('type')}
                  defaultValue="outgo"
                  required
                  variant="outlined">
                  <MenuItem value="income">Thu</MenuItem>
                  <MenuItem value="outgo">Chi</MenuItem>
                </TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Số tiền"
                  type="number"
                  {...form.register('amount')}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Ngày giờ thực hiện"
                  {...form.register('issued_at')}
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
              Ghi nhận
            </Button>
          </CardActions>
        </form>
        {/* <SuccessSnackbar onClose={handleSnackbarClose} open={openSnackbar} /> */}
      </Card>
    </Page>
  );
};

export default AccountantTransactionCreate;
