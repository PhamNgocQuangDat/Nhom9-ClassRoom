const createError = require('http-errors');
const { hashPassword } = require("../helpers/password-crypt");
const UserService = require("../services/user-service");
const AccountService = require('../services/account-service');

class UserController {
    // user role
    static async getUserById(req, res, next) {
        try {
            let user = await UserService.getUserById(req.params.userId);
            if (!user) {
                return next(createError.BadRequest( `Không tìm được User với id là ${req.params.userId}`))
            }
            const account = await AccountService.getAccountByUserId(user.userId);
            if (!account) {
                return next(createError.InternalServerError());
            }
            user.role = account.role;
            return res.status(200).json({
                status: 200,
                message: "done",
                data: user
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async getAllUser(req, res, next) {
        try {
            const users = await UserService.getAllUser();
            if (!users) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: users
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async createUser(req, res, next) {
        try {
            const checkUser = await UserService.getUserById(req.body.userId);
            if(checkUser){
                return next(createError.BadRequest(`Đã có dùng sử dụng id ${req.body.userId}`))
            }
            const newUser = await UserService.createUser(req.body);
            if (!newUser) {
                return next(createError.InternalServerError());
            }
            const accountData = {
                userId: newUser.userId,
                password: await hashPassword("123456"),
            }
            const account = await AccountService.createAccount(accountData);
            if(!account){
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: newUser
            });
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    
    static async updateUser(req, res, next) {
        try {

            const { userId, ...value } = req.body
            const user = await UserService.updateUser(userId, value);
            if (!user) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: user,

            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async deleteUserById(req, res, next) {
        try {
            console.log(req.params.userId)
        
            const user = await UserService.deleteUserById(req.params.userId);
            if (user <= 0) {
                return next(createError.InternalServerError());
            }
            
            return res.status(200).json({
                status: 200,
                message: 'done',
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    

}

module.exports = UserController;
