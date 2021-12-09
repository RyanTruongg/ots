import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import { useAuth } from 'hooks/use-auth';

const useStyles = makeStyles(() => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1150
  },
  methodCell: {
    width: 100
  },
  statusCell: {
    width: 64
  }
}));

const Logs = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const auth = useAuth();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Card>
        <CardContent>
          <Typography>Số tài khoản</Typography>
          <Typography gutterBottom variant="h4">
            0123 456 789
          </Typography>
          <Typography>Ngân hàng</Typography>
          <Typography gutterBottom variant="h4">
            Sacombank
          </Typography>

          <Typography>
            Chuyển tiền qua số tài khoản trên với nội dung:
          </Typography>
          <Typography gutterBottom variant="h4">
            {auth.user?.email}
          </Typography>

          <Typography>Mọi khiếu nại xin liên hệ:</Typography>
          <Typography gutterBottom variant="h4">
            0822767868
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

Logs.propTypes = {
  className: PropTypes.string
};

export default Logs;
