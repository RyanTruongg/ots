import pool from "../../configs/pg.js";
import PostgresHelper from "../../utils/PostgresHelper.js";

class EnrollmentRepository {
  static _getOne(student_id, course_id) {
    const queryString = `
      SELECT * FROM public.enrollment 
      WHERE student_id = $1 and course_id = $2
    `;
    const values = [student_id, course_id];

    return pool.query(queryString, values);
  }

  static _getAllByStudentId(student_id) {
    const queryString = `
      SELECT *, s.name as subject_name, c.name as course_name FROM public.enrollment e
      INNER JOIN 
        (SELECT c.*, count(e.student_id) as student_count FROM public.enrollment e
          INNER JOIN public.course c on (c.id = e.course_id)
          group by c.id) c 
        on (c.id = e.course_id)
      INNER JOIN public.subject s on (s.id = c.subject_id)
      WHERE student_id = $1 
    `;
    const values = [student_id];

    return pool.query(queryString, values);
  }

  static _getAllStudentInCourse(course_id) {
    const queryString = `
      SELECT *, id as enrollment_id FROM public.enrollment
      WHERE course_id = $1
    `;
    const values = [course_id];

    return pool.query(queryString, values);
  }

  static _createOne(createBody) {
    const { queryString, values } = PostgresHelper.createInsert("public.enrollment", createBody);

    return pool.query(queryString, values);
  }

  static _updateOne(id, updateBody) {
    const { queryString, values } = PostgresHelper.createUpdate(
      "public.enrollment",
      id,
      updateBody
    );

    return pool.query(queryString, values);
  }
}

export default EnrollmentRepository;
