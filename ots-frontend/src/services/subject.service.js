import axios from './axios';

class SubjectService {
  static _getOne(subject_id) {
    return axios.get('/subjects/' + subject_id);
  }

  static _getAll() {
    return axios.get('/subjects');
  }

  static _createOne(data) {
    return axios.post('/subjects', data);
  }

  static _updateOne(subject_id, data) {
    return axios.put('/subjects/' + subject_id, data);
  }
}

export default SubjectService;
