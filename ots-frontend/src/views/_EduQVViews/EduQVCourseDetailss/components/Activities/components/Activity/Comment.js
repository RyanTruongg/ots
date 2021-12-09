import { Box, Typography } from '@material-ui/core';
import React from 'react';

export default function Comment(props) {
  const { ...rest } = props;
  return (
    <Box {...rest} width="100%">
      <Typography variant="h6">Truong Thanh Nhut</Typography>
      <Typography variant="body1">Oh nice!</Typography>
    </Box>
  );
}
