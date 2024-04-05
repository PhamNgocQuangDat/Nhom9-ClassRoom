const { date } = require("joi");
const { generateId, accessTokenSecret, generateCode } = require("../helpers/generate-key");
const { generateAccessToken, generateVerificationToken } = require("../helpers/jwt");
const { hashPassword, comparePasswords } = require("../helpers/password-crypt");
const AccountService = require("../services/account-service");
const UserService = require("../services/user-service");
const createError = require('http-errors');
const StudentService = require("../services/student-service");

class SigController {

    static async staffLoginId(req, res, next) {
        try {
            const user = await UserService.getUserById(req.body.userId);
            if (!user) {
                return next(createError.NotFound('user not found'));
            }
            if (!user.active) {
                return next(createError.Forbidden("Tài khoản của bạn đã bị khóa"))
            }
            let account = await AccountService.getAccountByUserId(user.userId);
            if (!account) {
                return next(createError.NotFound('account not found'));
            }
            const checkValue = await comparePasswords(req.body.password, account.password);
            if (checkValue == false) {
                return next(createError.BadRequest('password not mach'));
            }
            const token = await generateAccessToken(user.userId, user.role);
            return res.status(200).json({
                status: 200,
                message: 'login done',
                data: {
                    role: user.role,
                    token: token
                }
            });

        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    };
    static async studentLogin(req, res, next) {
        try {
            try {
                let student = await StudentService.getStudentById(req.body.studentId);
                if (!student) {
                    return next(createError.NotFound('student not found'));
                }
                if (!student.active) {
                    return next(createError.Forbidden("Tài khoản của bạn đã bị khóa"))
                }
                let account = await AccountService.getAccountByStudentId(student.studentId);
                if (!account) {
                    return next(createError.NotFound('account not found'));
                }
                const checkValue = await comparePasswords(req.body.password, account.password);
                if (checkValue == false) {
                    return next(createError.BadRequest('password not mach'));
                }
                student.role = "SinhVien"
                const token = await generateAccessToken(student.studentId, student.role);
                return res.status(200).json({
                    status: 200,
                    message: 'login done',
                    data: {
                        role: student.role,
                        token:  token
                    }
                });
    
            } catch (error) {
                console.log(error);
                return next(createError.InternalServerError());
            }

        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    };


}
module.exports = SigController;