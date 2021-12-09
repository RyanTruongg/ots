import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import axios from 'utils/axios';
import { Page } from 'components';
import { Header, Results } from './components';
import StudentService from 'services/student.service';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  }
}));

const AdminStudents = () => {
  const classes = useStyles();

  const [customers, setCustomers] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    StudentService._getAll().then(res => setStudents(res.data.students));
  }, []);

  // const handleFilter = () => {};
  // const handleSearch = () => {};

  return (
    <Page className={classes.root} title="Customer Management List">
      <Header />
      {/* <SearchBar onFilter={handleFilter} onSearch={handleSearch} /> */}
      {customers && (
        <Results className={classes.results} customers={students} />
      )}
    </Page>
  );
};

export default AdminStudents;
