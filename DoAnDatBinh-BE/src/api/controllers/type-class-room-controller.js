const createError = require('http-errors');
const { hashPassword } = require("../helpers/password-crypt");
const TypeClassRoomService = require("../services/type-class-room-service");

class TypeClassRoomController {
    // user role
    static async getTypeClassRoomById(req, res, next) {
        try {
            const typeClassRoom = await TypeClassRoomService.getTypeClassRoomById(req.params.typeClassRoomId);
            if (!typeClassRoom) {
                
                return next(createError.BadRequest(`Không tìm được typeClassRoom với id là ${req.params.typeClassRoomId}`))
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: typeClassRoom
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async getAllTypeClassRoom(req, res, next) {
        try {
            const typeClassRoom = await TypeClassRoomService.getAllTypeClassRoom();
            if (!typeClassRoom) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: typeClassRoom
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async createTypeClassRoom(req, res, next) {
        try {
            const newtypeClassRoom = await TypeClassRoomService.createTypeClassRoom(req.body);
            if (!newtypeClassRoom) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: newtypeClassRoom
            });
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async updateTypeClassRoom(req, res, next) {
        try {

            const {typeClassRoomId, ...value} = req.body
            const typeClassRoom = await TypeClassRoomService.updateTypeClassRoom(typeClassRoomId, value);
            if (!typeClassRoom) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: typeClassRoom,
                
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async deleteTypeClassRoomById(req, res, next) {
        try {
            const typeClassRoom = await TypeClassRoomService.deleteTypeClassRoomById(req.params.typeClassRoomId);
            if(typeClassRoom<=0){
                return next(createError.BadRequest());
            }
            return res.status(200).json({
                status: 200,
                message: 'done'
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    
}

module.exports = TypeClassRoomController;
