import pool from "../../configs/pg.js";
import PostgresHelper from "../../utils/PostgresHelper.js";

class StaffRepository {
  static _getOne(id) {
    const queryString = `
      SELECT * FROM public.staff 
      WHERE user_id = $1
    `;
    const values = [id];

    return pool.query(queryString, values);
  }

  static _getAll() {
    const queryString = `
      SELECT * FROM public.staff 
      ORDER BY user_id ASC
    `;

    return pool.query(queryString);
  }

  static _createOne(createBody) {
    const { queryString, values } = PostgresHelper.createInsert("public.staff", createBody);

    return pool.query(queryString, values);
  }

  static _updateOne(id, updateBody) {
    const { queryString, values } = PostgresHelper.createUpdate("public.staff", id, updateBody);

    return pool.query(queryString, values);
  }

  static _deleteOne(id) {
    const queryString = `
      DELETE FROM public.staff 
      WHERE user_id = $1
    `;
    const values = [id];

    return pool.query(queryString, values);
  }
}

export default StaffRepository;
