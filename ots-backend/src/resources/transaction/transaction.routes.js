import { Router } from "express";

import TransactionService from "./transaction.service.js";
import asyncHandler from "../../utils/asyncHandler.js";
import pick from "../../utils/pick.js";
import admin from "../../configs/firebase.js";

const transactionRouter = Router();
const transactionColumns = ["user_id", "accountant_id", "amount", "message", "issued_at", "type"];

// [GET] /api/transactions/:transaction_id
transactionRouter.get(
  "/report",
  asyncHandler(async (req, res) => {
    const { year } = req.query;

    const report = await TransactionService._getReport(year);
    res.status(200).json({ status: "success", report });
  })
);

transactionRouter.get(
  "/:transaction_id",
  asyncHandler(async (req, res) => {
    const { transaction_id } = req.params;

    const transaction = await TransactionService._getTransaction(transaction_id);

    res.status(200).json({ status: "success", transaction });
  })
);

// [GET] /api/transactions
transactionRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const { student_id } = req.query;

    if (student_id) {
      const transactions = await TransactionService._queryTransactionsByStudentId(student_id);

      return res.status(200).json({ status: "success", transactions });
    }
    const transactions = await TransactionService._queryTransactions();

    return res.status(200).json({ status: "success", transactions });
  })
);

// [POST] /api/transactions
transactionRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const { email } = req.body;

    if (email) {
      const user_id = (await admin.auth().getUserByEmail(email)).uid;

      const createBody = pick(req.body, transactionColumns);

      createBody.user_id = user_id;

      const transaction = await TransactionService._createTransaction(createBody);

      return res.status(200).json({ status: "success", transaction });
    }
    const createBody = pick(req.body, transactionColumns);

    const transaction = await TransactionService._createTransaction(createBody);

    return res.status(200).json({ status: "success", transaction });
  })
);

// [PUT] /api/transactions/:transaction_id
transactionRouter.put(
  "/:transaction_id",
  asyncHandler(async (req, res) => {
    const { transaction_id } = req.params;
    const updateBody = pick(req.body, transactionColumns);

    const transaction = await TransactionService._updateTransaction(transaction_id, updateBody);

    res.status(200).json({ status: "success", transaction });
  })
);

// [DELETE] /api/transactions/:transaction_id
transactionRouter.delete(
  "/:transaction_id",
  asyncHandler(async (req, res) => {
    const { transaction_id } = req.params;

    await TransactionService._deleteTransaction(transaction_id);

    res.status(200).json({ status: "success", transaction: null });
  })
);

export default transactionRouter;
