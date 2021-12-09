import pool from "../../configs/pg.js";
import PostgresHelper from "../../utils/PostgresHelper.js";

class VoucherRepository {
  static _getOne(id) {
    const queryString = `
      SELECT * FROM public.voucher 
      WHERE code = $1
    `;
    const values = [id];

    return pool.query(queryString, values);
  }

  static _getAll() {
    const queryString = `
      SELECT * FROM public.voucher 
      ORDER BY code ASC
    `;

    return pool.query(queryString);
  }

  static _createOne(createBody) {
    const { queryString, values } = PostgresHelper.createInsert("public.voucher", createBody);

    return pool.query(queryString, values);
  }

  static _updateOne(id, updateBody) {
    const { queryString, values } = PostgresHelper.createUpdate("public.voucher", id, updateBody);

    return pool.query(queryString, values);
  }

  static _deleteOne(id) {
    const queryString = `
      DELETE FROM public.voucher 
      WHERE code = $1
    `;
    const values = [id];

    return pool.query(queryString, values);
  }
}

export default VoucherRepository;
