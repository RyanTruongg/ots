import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
  colors,
  Box,
  IconButton
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

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
  const { course, className, ...rest } = props;

  const classes = useStyles();

  if (!course) {
    return <p>Something wrongs</p>;
  }

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
            Lịch học: {course.schedule}
          </Typography>
        </div>
        <div className={classes.tags}>
          <Typography style={{ display: 'inline-block' }}>Môn:</Typography>
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
              <Typography variant="h5">{course.max_student || 0}</Typography>
              <Typography variant="body2">HS tối đa</Typography>
            </Grid>

            <Grid item>
              <Typography variant="h5">30</Typography>
              <Typography variant="body2">Đã tham gia</Typography>
            </Grid>

            <Grid item>
              <Typography variant="h5">
                {new Date(course.start_date).toDateString()}
              </Typography>
              <Typography variant="body2">Ngày bắt đầu</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">
                {new Date(course.end_date).toDateString()}
              </Typography>
              <Typography variant="body2">Ngày kết thúc</Typography>
            </Grid>

            <Grid item>
              <Typography variant="h5">Đang mở</Typography>
              <Typography variant="body2">Trạng thái</Typography>
            </Grid>
          </Grid>
          <Box
            display="flex"
            justifyContent="flex-end"
            marginTop="0.5rem"
            width="100%">
            <IconButton
              className={classes.learnMoreButton}
              color="primary"
              component={RouterLink}
              to={'/instructor/courses/' + course.id}
              variant="outlined">
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </div>
      </CardContent>
    </Card>
  );
};

CourseCard.propTypes = {
  className: PropTypes.string,
  course: PropTypes.object.isRequired
};

export default CourseCard;
