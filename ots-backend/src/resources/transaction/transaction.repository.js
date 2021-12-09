import pool from "../../configs/pg.js";
import PostgresHelper from "../../utils/PostgresHelper.js";

class TransactionRepository {
  static _getTotal(year) {
    const queryString = `
    SELECT date_part('month', issued_at) as month, type, sum(amount) as sum FROM public.transaction 
    WHERE date_part('year', issued_at) = $1 
    group by date_part('month', issued_at), type
    `;
    const values = [year];

    return pool.query(queryString, values);
  }

  static _getOne(id) {
    const queryString = `
      SELECT * FROM public.transaction 
      WHERE id = $1
      
    `;
    const values = [id];

    return pool.query(queryString, values);
  }

  static _getAllByStudentId(student_id) {
    const queryString = `
      SELECT * FROM public.transaction 
      WHERE user_id = $1
      ORDER BY issued_at DESC
    `;

    return pool.query(queryString, [student_id]);
  }

  static _createOne(createBody) {
    const { queryString, values } = PostgresHelper.createInsert("public.transaction", createBody);

    return pool.query(queryString, values);
  }

  static _getAll() {
    const queryString = `
      SELECT * FROM public.transaction 
      ORDER BY issued_at DESC
    `;

    return pool.query(queryString);
  }

  static _updateOne(id, updateBody) {
    const { queryString, values } = PostgresHelper.createUpdate(
      "public.transaction",
      id,
      updateBody
    );

    return pool.query(queryString, values);
  }

  static _deleteOne(id) {
    const queryString = `
      DELETE FROM public.transaction 
      WHERE id = $1
    `;
    const values = [id];

    return pool.query(queryString, values);
  }
}

export default TransactionRepository;
