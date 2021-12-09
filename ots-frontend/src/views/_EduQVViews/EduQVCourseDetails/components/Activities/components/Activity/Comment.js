import { Box, Typography } from '@material-ui/core';
import React from 'react';

export default function Comment(props) {
  const { ...rest } = props;
  return (
    <Box {...rest} width="100%">
      <Typography variant="h6">Nhựt Thanh Trương</Typography>
      <Typography variant="body1">Oke thầy</Typography>
    </Box>
  );
}
