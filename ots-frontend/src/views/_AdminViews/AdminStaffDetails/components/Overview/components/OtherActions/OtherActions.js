import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Divider
} from '@material-ui/core';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import StaffService from 'services/staff.service';

const useStyles = makeStyles(theme => ({
  root: {},
  mainActions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  notice: {
    marginTop: theme.spacing(1)
  },
  deleteButton: {
    marginTop: theme.spacing(1),
    color: theme.palette.white,
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark
    }
  },
  enableButton: {
    marginTop: theme.spacing(1),
    color: theme.palette.white,
    backgroundColor: theme.palette.success.main,
    '&:hover': {
      backgroundColor: theme.palette.success.dark
    }
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  }
}));
const OtherActions = props => {
  const { className, staff, setStaff, ...rest } = props;

  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const disableStaff = () => {
    setLoading(true);
    StaffService._updateOne(staff.user_id, {
      ...staff,
      disabled: true,
      full_name: staff.displayName,
      role: staff.customClaims?.role
    })
      .then(res => {
        setStaff(res.data.staff);
      })
      .finally(() => setLoading(false));
  };

  const enableStaff = () => {
    setLoading(true);
    StaffService._updateOne(staff.user_id, {
      ...staff,
      disabled: false,
      full_name: staff.displayName,
      role: staff.customClaims?.role
    })
      .then(res => {
        setStaff(res.data.staff);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader title="Hành động khác" />
      <Divider />
      <CardContent>
        {staff?.disabled ? (
          <Button
            className={classes.enableButton}
            disabled={loading}
            onClick={enableStaff}>
            <LockOpenRoundedIcon className={classes.buttonIcon} />
            Mở khóa
          </Button>
        ) : (
          <Button
            className={classes.deleteButton}
            disabled={loading}
            onClick={disableStaff}>
            <NotInterestedIcon className={classes.buttonIcon} />
            Vô hiệu hóa
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

OtherActions.propTypes = {
  className: PropTypes.string,
  setStaff: PropTypes.func,
  staff: PropTypes.object
};

export default OtherActions;
