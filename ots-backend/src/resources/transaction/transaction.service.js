import TransactionRepository from "./transaction.repository.js";

import ApiError from "../../utils/ApiError.js";

import StudentRepository from "../student/student.repository.js";

class TransactionService {
  static async _getReport(year) {
    try {
      const result = await TransactionRepository._getTotal(year);

      return result.rows;
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _queryTransactionsByStudentId(student_id) {
    try {
      const result = await TransactionRepository._getAllByStudentId(student_id);

      return result.rows;
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _getTransaction(transaction_id) {
    try {
      const result = await TransactionRepository._getOne(transaction_id);

      return result.rows[0] ?? null;
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _queryTransactions() {
    try {
      const result = await TransactionRepository._getAll();

      return result.rows;
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _createTransaction(createBody) {
    try {
      const result = await TransactionRepository._createOne(createBody);

      try {
        const curBalance = await (
          await StudentRepository._getBalanceById(createBody.user_id)
        ).rows[0].balance;

        await StudentRepository._updateOne(createBody.user_id, {
          balance: parseFloat(curBalance) + parseFloat(createBody.amount),
        });
      } catch (error) {
        console.log(error);
      }

      return result.rows[0];
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _updateTransaction(transaction_id, updateBody) {
    try {
      const result = await TransactionRepository._updateOne(transaction_id, updateBody);

      return result.rows[0];
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }

  static async _deleteTransaction(transaction_id) {
    try {
      await TransactionRepository._deleteOne(transaction_id);

      return null;
    } catch (error) {
      if (error.code === 23503) {
        throw new ApiError(400, "...");
      }

      throw new ApiError(500, "Internal Server Error");
    }
  }
}

export default TransactionService;
