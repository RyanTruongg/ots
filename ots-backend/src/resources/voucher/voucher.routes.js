import { Router } from "express";

import VoucherService from "./voucher.service.js";
import asyncHandler from "../../utils/asyncHandler.js";
import pick from "../../utils/pick.js";

const voucherRouter = Router();
const voucherColumns = ["code", "name", "expire_at", "discount_rate"];

// [GET] /api/vouchers/:voucher_id
voucherRouter.get(
  "/:voucher_id",
  asyncHandler(async (req, res) => {
    const { voucher_id } = req.params;

    const voucher = await VoucherService._getVoucher(voucher_id);

    res.status(200).json({ status: "success", voucher });
  })
);

// [GET] /api/vouchers
voucherRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const vouchers = await VoucherService._queryVouchers();

    res.status(200).json({ status: "success", vouchers });
  })
);

// [POST] /api/vouchers
voucherRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const createBody = pick(req.body, voucherColumns);

    const voucher = await VoucherService._createVoucher(createBody);

    res.status(200).json({ status: "success", voucher });
  })
);

// [PUT] /api/vouchers/:voucher_id
voucherRouter.put(
  "/:voucher_id",
  asyncHandler(async (req, res) => {
    const { voucher_id } = req.params;
    const updateBody = pick(req.body, voucherColumns);

    const voucher = await VoucherService._updateVoucher(voucher_id, updateBody);

    res.status(200).json({ status: "success", voucher });
  })
);

// [DELETE] /api/vouchers/:voucher_id
voucherRouter.delete(
  "/:voucher_id",
  asyncHandler(async (req, res) => {
    const { voucher_id } = req.params;

    await VoucherService._deleteVoucher(voucher_id);

    res.status(200).json({ status: "success", voucher: null });
  })
);

export default voucherRouter;
