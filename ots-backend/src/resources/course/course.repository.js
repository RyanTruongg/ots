import pool from "../../configs/pg.js";
import PostgresHelper from "../../utils/PostgresHelper.js";

class CourseRepository {
  static _getOne(id) {
    const queryString = `
    SELECT c.*, s.name as subject_name, s.description, count(e.student_id) as student_count FROM public.course c
    INNER JOIN public.subject s ON (c.subject_id = s.id)
    LEFT JOIN public.enrollment e ON (c.id = e.course_id)
    WHERE c.id = $1
    group by c.id, s.name, s.description
      
    `;
    const values = [id];

    return pool.query(queryString, values);
  }

  static _getAll() {
    const queryString = `
    SELECT c.*, s.name as subject_name, s.description, count(e.student_id) as student_count FROM public.course c
    INNER JOIN public.subject s ON (c.subject_id = s.id)
  LEFT JOIN public.enrollment e ON (c.id = e.course_id)
  group by c.id, s.name, s.description
      
    `;

    return pool.query(queryString);
  }

  static _getAllByInstructorId(instructor_id) {
    const queryString = `
      SELECT c.*, s.id as subject_id, s.name as subject_name, s.description FROM public.course c
      INNER JOIN public.subject s ON (c.subject_id = s.id)
      WHERE instructor_id = $1
    `;

    return pool.query(queryString, [instructor_id]);
  }

  static _createOne(createBody) {
    const { queryString, values } = PostgresHelper.createInsert("public.course", createBody);

    return pool.query(queryString, values);
  }

  static _updateOne(id, updateBody) {
    const { queryString, values } = PostgresHelper.createUpdate("public.course", id, updateBody);

    return pool.query(queryString, values);
  }

  static _deleteOne(id) {
    const queryString = `
      DELETE FROM public.course 
      WHERE id = $1
    `;
    const values = [id];

    return pool.query(queryString, values);
  }
}

export default CourseRepository;
