import axios from './axios';

class VoucherService {
  static _getOne(voucher_id) {
    return axios.get('/vouchers/' + voucher_id);
  }

  static _getAll() {
    return axios.get('/vouchers');
  }

  static _createOne(data) {
    return axios.post('/vouchers', data);
  }
}

export default VoucherService;
