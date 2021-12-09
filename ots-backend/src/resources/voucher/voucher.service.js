import VoucherRepository from "./voucher.repository.js";
import ApiError from "../../utils/ApiError.js";

class VoucherService {
  static async _getVoucher(voucher_id) {
    try {
      const result = await VoucherRepository._getOne(voucher_id);

      return result.rows[0] ?? null;
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _queryVouchers() {
    try {
      const result = await VoucherRepository._getAll();

      return result.rows;
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _createVoucher(createBody) {
    try {
      const result = await VoucherRepository._createOne(createBody);

      return result.rows[0];
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _updateVoucher(voucher_id, updateBody) {
    try {
      const result = await VoucherRepository._updateOne(voucher_id, updateBody);

      return result.rows[0];
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _deleteVoucher(voucher_id) {
    try {
      await VoucherRepository._deleteOne(voucher_id);

      return null;
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }
}

export default VoucherService;
