import axios from './axios';

class UserService {
  static _createOne(user_id) {
    return axios.post('/users', { id: user_id });
  }
}

export default UserService;
