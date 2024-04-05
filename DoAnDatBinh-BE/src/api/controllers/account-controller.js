const createError = require('http-errors');
const { hashPassword, comparePasswords } = require("../helpers/password-crypt");
const AccountService = require("../services/account-service");
const UserService = require('../services/user-service');
const StudentService = require('../services/student-service');

class AccountController {
    static async userResetPassword(req, res, next) {
        try {
            let account = await AccountService.getAccountByUserId(req.body.userId);
            if (!account) {
                return next(createError.BadRequest(`Không tìm được user với id là ${req.body.userId}`));
            }
            const newPass = await hashPassword('123456');
            const newAccount = await AccountService.updateAccount(account.accountId, {password: newPass})
            if (!newAccount) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async studentResetPassword(req, res, next) {
        try {
            let account = await AccountService.getAccountByStudentId(req.body.studentId);
            if (!account) {
                return next(createError.BadRequest(`Không tìm được student với id là ${req.body.studentId}`));
            }
            const newPass = await hashPassword('123456');
            const newAccount = await AccountService.updateAccount(account.accountId, {password: newPass})
            if (!newAccount) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async ChangePassword(req, res, next) {
        try {
            //kiểm tra old pass và new pass
            let account;
            if (req.role == "SinhVien") {
                account = await AccountService.getAccountByStudentId(req.userId);
            } else {
                account = await AccountService.getAccountByUserId(req.userId);
            }
            if (!account) {
                return next(createError.InternalServerError());
            }
            const checkOldPassword = await comparePasswords(req.body.oldPassword, account.password)
            if (!checkOldPassword) {
                return next(createError.BadRequest('Mật khẩu cũ không đúng'));
            }
            const newPass = await hashPassword(req.body.newPassword);
            const newAccount = await AccountService.updateAccount(account.accountId, {password: newPass})
            if (!newAccount) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async getAccountInfor(req, res, next) {
        try {
            //kiểm tra old pass và new pass
            let account;
            if (req.role == "SinhVien") {
                account = await StudentService.getStudentById(req.userId);
            } else {
                account = await UserService.getUserById(req.userId);
            }
            if (!account) {
                return next(createError.InternalServerError());
            }
            account.role = req.role;
            return res.status(200).json({
                status: 200,
                message: "done",
                data: account
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }


}

module.exports = AccountController;
