import StaffRepository from "./staff.repository.js";
import ApiError from "../../utils/ApiError.js";

import admin from "../../configs/firebase.js";
import UserRepository from "../user/user.repository.js";
import createCustomClaims from "../../utils/createCustomClaims.js";

class StaffService {
  static async _getStaff(staff_id) {
    try {
      const result = await StaffRepository._getOne(staff_id);

      const firebaseUser = await admin.auth().getUser(staff_id);

      const mergedUser = { ...firebaseUser, ...result.rows[0] };

      return result.rows[0] ? mergedUser : null;
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _queryStaffs() {
    try {
      const result = await StaffRepository._getAll();

      const staffIdList = result.rows.map((row) => row.user_id);

      const firebaseStaffsInfo = admin
        .auth()
        .listUsers()
        .then((listUsersResult) => {
          const filterd = listUsersResult.users.filter((user) => staffIdList.includes(user.uid));
          const merged = filterd.map((user) => {
            const raw = result.rows.find((e) => e.user_id === user.uid);
            return { ...user, ...raw };
          });

          return merged;
        });

      return firebaseStaffsInfo;
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _queryStaffsByRole(role) {
    try {
      const result = await StaffRepository._getAll();

      const staffIdList = result.rows.map((row) => row.user_id);

      const firebaseStaffsInfo = admin
        .auth()
        .listUsers()
        .then((listUsersResult) => {
          const filterd = listUsersResult.users.filter(
            (user) => staffIdList.includes(user.uid) && user.customClaims?.role === role
          );
          const merged = filterd.map((user) => {
            const raw = result.rows.find((e) => e.user_id === user.uid);
            return { ...user, ...raw };
          });

          return merged;
        });

      return firebaseStaffsInfo;
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _createStaff(userBody, staffBody) {
    try {
      const createdUser = await admin.auth().createUser({
        email: userBody.email,
        emailVerified: true,
        password: userBody.password,
        displayName: userBody.full_name,
      });

      await UserRepository._createOne({ id: createdUser.uid });

      await createCustomClaims(userBody.email, { role: userBody.role });

      const newstaffBody = { ...staffBody, user_id: createdUser.uid };

      const result = await StaffRepository._createOne(newstaffBody);

      return result.rows[0];
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _updateStaff(staff_id, staffBody, userBody) {
    try {
      const newFirebaseUser = await admin.auth().updateUser(staff_id, {
        displayName: userBody.full_name,
        disabled: userBody.disabled,
      });

      await createCustomClaims(newFirebaseUser.email, { role: userBody.role });

      const result = await StaffRepository._updateOne(staff_id, staffBody);

      return { ...newFirebaseUser, ...result.rows[0] };
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _deleteStaff(staff_id) {
    try {
      await StaffRepository._deleteOne(staff_id);

      return null;
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }
}

export default StaffService;
