import pool from "../../configs/pg.js";
import PostgresHelper from "../../utils/PostgresHelper.js";

class UserRepository {
  static _getOne(id) {
    const queryString = `
      SELECT * FROM public.user 
      WHERE id = $1
    `;
    const values = [id];

    return pool.query(queryString, values);
  }

  static _getAll() {
    const queryString = `
      SELECT * FROM public.user 
      ORDER BY id ASC
    `;

    return pool.query(queryString);
  }

  static _createOne(createBody) {
    const { queryString, values } = PostgresHelper.createInsert("public.user", createBody);

    return pool.query(queryString, values);
  }

  static _updateOne(id, updateBody) {
    const { queryString, values } = PostgresHelper.createUpdate("public.user", id, updateBody);

    return pool.query(queryString, values);
  }

  static _deleteOne(id) {
    const queryString = `
      DELETE FROM public.user 
      WHERE id = $1
    `;
    const values = [id];

    return pool.query(queryString, values);
  }
}

export default UserRepository;
