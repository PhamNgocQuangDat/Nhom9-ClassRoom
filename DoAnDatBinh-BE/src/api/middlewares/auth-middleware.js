// jwtMiddleware.js
const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const UserService = require('../services/user-service');



const authorization = permission => {
    return async (req, res, next) => {
        if (!req.headers['authorization']) {
            return next(createError.Unauthorized());
        }
        const authHeader = req.headers['authorization'];
        const bearerToken = authHeader.split(' ');
        const token = bearerToken[1];
        // console.log(bearerToken[0]);    
        if (bearerToken[0] != 'Bearer') {
            return next(createError.Unauthorized("Lỗi định dạng token"));
        }
        try {
            const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);    
            req.userId = payload.userId;
            req.role = payload.role;

            if (!permission.includes(payload.role)) {
                return next(createError.Unauthorized('Bạn không có quyền truy cập vào api này'));
            }

            next();
        } catch (err) {
            return next(createError.Unauthorized(err.message));
        }
    };
};

module.exports = {
    authorization,
}