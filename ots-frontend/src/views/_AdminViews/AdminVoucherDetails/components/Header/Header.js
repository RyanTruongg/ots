import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Header = props => {
  const { className, voucher, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography component="h2" gutterBottom variant="overline">
        Voucher
      </Typography>
      <Typography component="h1" variant="h3">
        {voucher.name}
      </Typography>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  voucher: PropTypes.object.isRequired
};

export default Header;
