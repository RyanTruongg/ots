import axios from './axios';

class StaffService {
  static _getOne(staff_id) {
    return axios.get('staffs/' + staff_id);
  }
  static _getAll() {
    return axios.get('/staffs');
  }

  static _getAllByRole(role) {
    return axios.get('/staffs?role=' + role);
  }
  static _createOne(data) {
    return axios.post('/staffs', data);
  }
  static _updateOne(user_id, data) {
    return axios.put('/staffs/' + user_id, data);
  }
}

export default StaffService;
