import pool from "../../configs/pg.js";
import PostgresHelper from "../../utils/PostgresHelper.js";

class PostRepository {
  static _getOne(id) {
    const queryString = `
      SELECT * FROM public.post 
      WHERE id = $1
    `;
    const values = [id];

    return pool.query(queryString, values);
  }

  static _getAll() {
    const queryString = `
      SELECT * FROM public.post 
      ORDER BY id ASC
    `;

    return pool.query(queryString);
  }

  static _createOne(createBody) {
    const { queryString, values } = PostgresHelper.createInsert("public.post", createBody);

    return pool.query(queryString, values);
  }

  static _updateOne(id, updateBody) {
    const { queryString, values } = PostgresHelper.createUpdate("public.post", id, updateBody);

    return pool.query(queryString, values);
  }

  static _deleteOne(id) {
    const queryString = `
      DELETE FROM public.post 
      WHERE id = $1
    `;
    const values = [id];

    return pool.query(queryString, values);
  }
}

export default PostRepository;
