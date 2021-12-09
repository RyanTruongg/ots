import SubjectRepository from "./subject.repository.js";
import ApiError from "../../utils/ApiError.js";

class SubjectService {
  static async _getSubject(subject_id) {
    try {
      const result = await SubjectRepository._getOne(subject_id);

      return result.rows[0] ?? null;
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _querySubjects() {
    try {
      const result = await SubjectRepository._getAll();

      return result.rows;
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _createSubject(createBody) {
    try {
      const result = await SubjectRepository._createOne(createBody);

      return result.rows[0];
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _updateSubject(subject_id, updateBody) {
    try {
      const result = await SubjectRepository._updateOne(subject_id, updateBody);

      return result.rows[0];
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _deleteSubject(subject_id) {
    try {
      await SubjectRepository._deleteOne(subject_id);

      return null;
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }
}

export default SubjectService;
