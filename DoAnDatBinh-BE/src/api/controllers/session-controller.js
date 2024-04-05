const createError = require('http-errors');
const { hashPassword } = require("../helpers/password-crypt");
const SessionService = require("../services/session-service");

class SessionController {
    // user role
    static async getSessionById(req, res, next) {
        try {
            const Session = await SessionService.getSessionById(req.params.sessionId);
            if (!Session) {
            
                return next(createError.BadRequest(`Không tìm được Session với id là ${req.params.sessionId}`))
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: Session
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async getAllSession(req, res, next) {
        try {
            const Sessions = await SessionService.getAllSession();
            if (!Sessions) {
              return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: Sessions
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async createSession(req, res, next) {
        try {
            const Session = await SessionService.createSession(req.body);
            if (!Session) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: Session
            });
        } catch (error) {
            
            console.log(error.name);
            if (error.name == "SequelizeForeignKeyConstraintError") {
                return next(createError.BadRequest("Lỗi nhập khóa phụ không trùng với dữ liệu"))
            }
            return next(createError.InternalServerError());
        }
    }
    static async createSessions(req, res, next) {
        try {
            const Sessions = await SessionService.createMultipleSessions(req.body);
            if (!Sessions) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: Sessions
            });
        } catch (error) {
            
            console.log(error.name);
            if (error.name == "SequelizeForeignKeyConstraintError") {
                return next(createError.BadRequest("Lỗi nhập khóa phụ không trùng với dữ liệu"))
            }
            return next(createError.InternalServerError());
        }
    }
    static async updateSession(req, res, next) {
        try {

            const {sessionId, ...value} = req.body
            const Session = await SessionService.updateSession(sessionId, value);
            if (!Session) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: Session,
                
            })
        } catch (error) {
            console.log(error);
            if (error.name == "SequelizeForeignKeyConstraintError") {
                return next(createError.BadRequest("Lỗi nhập khóa phụ không trùng với dữ liệu"))
            }
            return next(createError.InternalServerError());
        }
    }
    static async deleteSessionById(req, res, next) {
        try {

            const Session = await SessionService.deleteSessionById(req.params.sessionId);
            if(Session <=0){
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

module.exports = SessionController;
