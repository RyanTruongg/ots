import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { Page } from 'components';
import { Header, Results } from './components';
import StaffService from 'services/staff.service';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  }
}));

const AdminStaffs = () => {
  const classes = useStyles();

  const [staffs, setStaffs] = useState([]);
  useEffect(() => {
    StaffService._getAll().then(res => setStaffs(res.data.staffs));
  }, []);

  return (
    <Page className={classes.root} title="Tài khoản nhân viên">
      <Header />
      {/* <SearchBar onFilter={handleFilter} onSearch={handleSearch} /> */}
      {staffs && <Results className={classes.results} staffs={staffs} />}
    </Page>
  );
};

export default AdminStaffs;
