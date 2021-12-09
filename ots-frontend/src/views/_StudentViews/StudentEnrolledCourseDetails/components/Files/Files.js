import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent } from '@material-ui/core';

import { FilesDropzone } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  files: {
    marginTop: theme.spacing(3)
  }
}));

const Files = props => {
  const { files, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Card>
        <CardContent>
          <FilesDropzone />
        </CardContent>
      </Card>
    </div>
  );
};

Files.propTypes = {
  className: PropTypes.string,
  files: PropTypes.array.isRequired
};

export default Files;
