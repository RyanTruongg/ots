import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
  colors,
  Box,
  TextField
} from '@material-ui/core';

import VoucherService from 'services/voucher.service';
import { useAuth } from 'hooks/use-auth';
import EnrollmentService from 'services/enrollment.service';
import formatter from 'utils/formatter';
import { Label } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  header: {
    paddingBottom: 0
  },
  content: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0
    }
  },
  description: {
    padding: theme.spacing(2, 3, 1, 3)
  },
  tags: {
    padding: theme.spacing(0, 3, 1, 3),
    '& > * + *': {
      marginLeft: theme.spacing(1)
    }
  },
  learnMoreButton: {
    marginLeft: theme.spacing(2)
  },
  likedButton: {
    color: colors.red[600]
  },
  shareButton: {
    marginLeft: theme.spacing(1)
  },
  details: {
    padding: theme.spacing(1, 3)
  }
}));

const CourseCard = props => {
  const { course, className, checkEnrollment, ...rest } = props;

  const classes = useStyles();
  const [cardStatus, setCardStatus] = useState('details');
  const [voucherCode, setVoucherCode] = useState('');
  const [voucher, setVoucher] = useState(null);

  const auth = useAuth();

  const fetchVoucher = () => {
    VoucherService._getOne(voucherCode).then(res =>
      setVoucher(res.data.voucher)
    );
  };

  const createEnrollment = () => {
    const body = {
      student_id: auth.user?.user_id,
      course_id: course.id,
      voucher_code: voucherCode
    };

    EnrollmentService._createOne(body)
      .then(() => {
        alert('Ok');
        checkEnrollment();
        auth.fetchBalance();
      })
      .catch(() => alert('Loi'));
  };

  if (!course) {
    return <p>Something wrongs</p>;
  }

  if (cardStatus === 'buy') {
    return (
      <Card {...rest} className={clsx(classes.root, className)}>
        <CardContent className={classes.content}>
          <Grid className={classes.description} container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6">Gi?? g???c:</Typography>
              <Typography variant="body1">
                {formatter.format(course.price)}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Box display="flex" justifyContent="space-between">
                <TextField
                  label="M?? gi???m gi??"
                  onChange={e => setVoucherCode(e.target.value)}
                  value={voucherCode}
                  variant="outlined"
                />
                <Button
                  color="primary"
                  onClick={fetchVoucher}
                  size="small"
                  variant="outlined">
                  ??p d???ng
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6">???? gi???m:</Typography>
              <Typography variant="body1">
                {formatter.format(voucher?.discount_rate || 0)}
              </Typography>
              {voucher && (
                <Typography variant="body1">
                  Voucher: ({voucher.name} - {voucher.code})
                </Typography>
              )}
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6">T???ng:</Typography>
              {voucher && (
                <Typography
                  style={{ textDecoration: 'line-through' }}
                  variant="body1">
                  {formatter.format(course.price)}
                </Typography>
              )}
              <Typography variant="body1">
                {formatter.format(course.price - (voucher?.discount_rate || 0))}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Button
                color="primary"
                fullWidth
                onClick={createEnrollment}
                style={{ marginBottom: '0.5rem' }}
                variant="contained">
                Thanh to??n
              </Button>
              <Button
                color="primary"
                fullWidth
                onClick={() => setCardStatus('details')}
                variant="outlined">
                Tr??? v???
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }

  if (cardStatus === 'details') {
    return (
      <Card {...rest} className={clsx(classes.root, className)}>
        <CardHeader
          className={classes.header}
          disableTypography
          title={
            <Typography color="textPrimary" variant="h5">
              {course.name}
            </Typography>
          }
        />
        <CardContent className={classes.content}>
          <div className={classes.description}>
            <Typography colo="textSecondary" variant="subtitle2">
              L???ch h???c: {course.schedule}
            </Typography>
          </div>
          <div className={classes.tags}>
            <Typography style={{ display: 'inline-block' }}>M??n:</Typography>
            <Label color={colors.blue[400]}>{course.subject_name}</Label>
          </div>
          <Divider />
          <div className={classes.details}>
            <Grid
              alignItems="center"
              container
              justify="space-between"
              spacing={3}>
              <Grid item>
                <Typography variant="h5">
                  {formatter.format(course.price)}
                </Typography>
                <Typography variant="body2">Gi??</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">{course.max_student || 0}</Typography>
                <Typography variant="body2">HS t???i ??a</Typography>
              </Grid>

              <Grid item>
                <Typography variant="h5">30</Typography>
                <Typography variant="body2">???? tham gia</Typography>
              </Grid>

              <Grid item>
                <Typography variant="h5">
                  {new Date(course.start_date).toDateString()}
                </Typography>
                <Typography variant="body2">Ng??y b???t ?????u</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">
                  {new Date(course.end_date).toDateString()}
                </Typography>
                <Typography variant="body2">Ng??y k???t th??c</Typography>
              </Grid>

              <Grid item>
                <Typography variant="h5">??ang m???</Typography>
                <Typography variant="body2">Tr???ng th??i</Typography>
              </Grid>
            </Grid>
            <Box
              display="flex"
              justifyContent="flex-end"
              marginTop="0.5rem"
              width="100%">
              <Button
                className={classes.learnMoreButton}
                color="primary"
                onClick={() => setCardStatus('buy')}
                variant="contained">
                ????ng k?? v???i {course.price}??
              </Button>
            </Box>
          </div>
        </CardContent>
      </Card>
    );
  }
};

CourseCard.propTypes = {
  checkEnrollment: PropTypes.func.isRequired,
  className: PropTypes.string,
  course: PropTypes.object.isRequired
};

export default CourseCard;
