import CourseRepository from "./course.repository.js";
import ApiError from "../../utils/ApiError.js";

class CourseService {
  static async _getCourse(course_id) {
    try {
      const result = await CourseRepository._getOne(course_id);

      return result.rows[0] ?? null;
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _queryCourses() {
    try {
      const result = await CourseRepository._getAll();

      return result.rows;
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _queryCoursesByInstructorId(instructor_id) {
    try {
      const result = await CourseRepository._getAllByInstructorId(instructor_id);

      return result.rows;
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _createCourse(createBody) {
    try {
      const result = await CourseRepository._createOne(createBody);

      return result.rows[0];
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _updateCourse(course_id, updateBody) {
    try {
      const result = await CourseRepository._updateOne(course_id, updateBody);

      return result.rows[0];
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _deleteCourse(course_id) {
    try {
      await CourseRepository._deleteOne(course_id);

      return null;
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }
}

export default CourseService;
