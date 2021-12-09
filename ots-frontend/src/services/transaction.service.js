import axios from './axios';

class TransactionService {
  // static _getOne(voucher_id) {
  //   return axios.get('/vouchers/' + voucher_id);
  // }

  static _getReport(year) {
    return axios.get('/transactions/report', { params: { year } });
  }

  static _getAll() {
    return axios.get('/transactions');
  }

  static _getAllById(student_id) {
    return axios.get('/transactions', { params: { student_id } });
  }

  static _createOne(data) {
    return axios.post('/transactions', data);
  }
}

export default TransactionService;
