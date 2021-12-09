import UserRepository from "./user.repository.js";
import ApiError from "../../utils/ApiError.js";

class UserService {
  static async _getUser(user_id) {
    try {
      const result = await UserRepository._getOne(user_id);

      return result.rows[0] ?? null;
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _queryUsers() {
    try {
      const result = await UserRepository._getAll();

      return result.rows;
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _createUser(createBody) {
    try {
      const result = await UserRepository._createOne(createBody);

      return result.rows[0];
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _updateUser(user_id, updateBody) {
    try {
      const result = await UserRepository._updateOne(user_id, updateBody);

      return result.rows[0];
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _deleteUser(user_id) {
    try {
      await UserRepository._deleteOne(user_id);

      return null;
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }
}

export default UserService;
