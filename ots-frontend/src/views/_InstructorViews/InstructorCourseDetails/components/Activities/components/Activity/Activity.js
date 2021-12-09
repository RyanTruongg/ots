import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import CommentIcon from '@material-ui/icons/Comment';
import { Box, Divider, TextField } from '@material-ui/core';
import Comment from './Comment';

const useStyles = makeStyles(theme => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },

  avatar: {
    backgroundColor: red[500]
  }
}));

export default function Activity(props) {
  const { className, ...rest } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        avatar={<Avatar className={classes.avatar}>T</Avatar>}
        subheader={new Date().toLocaleString('vi-VN')}
        title={<Typography variant="h5">Truong Thanh Nhut</Typography>}
      />

      <CardContent>
        <Typography component="p" variant="body1">
          Dear all,Thời khóa biểu cập nhật rồi! Vẫn học như bình thường nhé mọi
          người! Thân!
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          className={clsx(classes.expand)}
          onClick={handleExpandClick}>
          <CommentIcon />
        </IconButton>
      </CardActions>
      <Divider />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Comments(2)
          </Typography>
          <Box padding="0.5rem">
            {[...Array(2)].map(() => (
              <Comment style={{ marginBottom: '0.5rem' }} />
            ))}
          </Box>
          <TextField
            fullWidth
            label="Comment"
            style={{ marginTop: '1rem' }}
            variant="outlined"
          />
        </CardContent>
      </Collapse>
    </Card>
  );
}
