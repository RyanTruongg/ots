import axios from './axios';

class StudentService {
  static _getOne(student_id) {
    return axios.get('/students/' + student_id);
  }

  static _getAll() {
    return axios.get('/students');
  }

  static _createOne(data) {
    return axios.post('/students', data);
  }
}

export default StudentService;
