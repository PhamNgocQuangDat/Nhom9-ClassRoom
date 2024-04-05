
const express = require('express');
const router = express.Router();
const AccountController = require('../controllers/account-controller');
const { noAuthMiddleware, authorization } = require('../middlewares/auth-middleware');


router.post("/account/reset-password/user", authorization(["PhongDaoTao"]), AccountController.userResetPassword);
router.post("/account/reset-password/student", authorization(["PhongDaoTao"]), AccountController.studentResetPassword);
router.post("/account/change-password", authorization(["SinhVien","GiaoVien","PhongDaoTao"]), AccountController.ChangePassword);
router.get("/account/info", authorization(["SinhVien","GiaoVien","PhongDaoTao"]), AccountController.getAccountInfor);

module.exports = router;
