import pool from "../../configs/pg.js";
import PostgresHelper from "../../utils/PostgresHelper.js";

class SubjectRepository {
  static _getOne(id) {
    const queryString = `
      SELECT * FROM public.subject 
      WHERE id = $1
    `;
    const values = [id];

    return pool.query(queryString, values);
  }

  static _getAll() {
    const queryString = `
      SELECT * FROM public.subject 
      ORDER BY id ASC
    `;

    return pool.query(queryString);
  }

  static _createOne(createBody) {
    const { queryString, values } = PostgresHelper.createInsert("public.subject", createBody);

    return pool.query(queryString, values);
  }

  static _updateOne(id, updateBody) {
    const { queryString, values } = PostgresHelper.createUpdate("public.subject", id, updateBody);

    return pool.query(queryString, values);
  }

  static _deleteOne(id) {
    const queryString = `
      DELETE FROM public.subject 
      WHERE id = $1
    `;
    const values = [id];

    return pool.query(queryString, values);
  }
}

export default SubjectRepository;
