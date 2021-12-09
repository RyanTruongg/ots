import StudentRepository from "./student.repository.js";
import ApiError from "../../utils/ApiError.js";
import admin from "../../configs/firebase.js";

class StudentService {
  static async _getStudent(student_id) {
    try {
      const result = await (await StudentRepository._getOne(student_id)).rows[0];

      const student = await admin.auth().getUser(student_id);

      return { ...student, ...result };
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _queryStudents() {
    try {
      const students = (await admin.auth().listUsers()).users.filter(
        (users) => !users.customClaims
      );

      return students;
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _createStudent(createBody) {
    try {
      const result = await StudentRepository._createOne(createBody);

      return result.rows[0];
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _updateStudent(student_id, updateBody) {
    try {
      const result = await StudentRepository._updateOne(student_id, updateBody);

      return result.rows[0];
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _deleteStudent(student_id) {
    try {
      await StudentRepository._deleteOne(student_id);

      return null;
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }
}

export default StudentService;
