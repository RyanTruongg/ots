import ApiError from "../../utils/ApiError.js";
import StudentRepository from "../student/student.repository.js";
import EnrollmentRepository from "./enrollment.repository.js";
import CourseRepository from "../course/course.repository.js";
import VoucherRepository from "../voucher/voucher.repository.js";
import admin from "../../configs/firebase.js";

class EnrollmentService {
  static async _createEnrollment(createBody) {
    try {
      const curBalance = await (
        await StudentRepository._getBalanceById(createBody.student_id)
      ).rows[0].balance;

      const coursePrice = (await CourseRepository._getOne(createBody.course_id)).rows[0].price;

      const voucher = await VoucherRepository._getOne(createBody.voucher_code);

      const voucherDiscount = voucher.rows[0] ? voucher.rows[0].discount_rate : 0;

      if (curBalance < coursePrice - voucherDiscount) {
        throw new ApiError(400, "Not enough money");
      }

      await StudentRepository._updateOne(createBody.student_id, {
        balance: curBalance - coursePrice + voucherDiscount,
      });

      // eslint-disable-next-line no-param-reassign
      if (!voucher.rows[0]) delete createBody.voucher_code;

      const result = await EnrollmentRepository._createOne(createBody);
      return result.rows[0];
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }
      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _getEnrollment(student_id, course_id) {
    try {
      const result = await EnrollmentRepository._getOne(student_id, course_id);

      return result.rows[0] ?? null;
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _getAllStudentInCourse(course_id) {
    try {
      const dbStudents = (await EnrollmentRepository._getAllStudentInCourse(course_id)).rows;
      const student_ids = dbStudents.map((row) => row.student_id);

      const students = (await admin.auth().listUsers()).users
        .filter((user) => student_ids.some((id) => user.uid === id))
        .map((student) => {
          const dbStudent = dbStudents.find((s) => s.student_id === student.uid);
          return { ...student, ...dbStudent };
        });

      return students;
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _updateEnrollment(enrollment_id, updateBody) {
    try {
      const result = await EnrollmentRepository._updateOne(enrollment_id, updateBody);

      return result.rows[0];
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }
      console.log(error);
      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _getEnrollmentByStudentId(student_id) {
    try {
      const result = await EnrollmentRepository._getAllByStudentId(student_id);

      return result.rows ?? null;
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }
}

export default EnrollmentService;
