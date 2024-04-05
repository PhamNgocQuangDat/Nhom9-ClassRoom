const createError = require('http-errors');
const { hashPassword } = require("../helpers/password-crypt");
const ClassRoomService = require("../services/class-room-service");

class ClassRoomController {
    // user role
    static async getClassRoomById(req, res, next) {
        try {
            const classRoom = await ClassRoomService.getClassRoomById(req.params.classRoomId);
            if (!classRoom) {
                return next(createError.BadRequest(`Không tìm được ClassRoom với id là ${req.params.classRoomId}`))
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: classRoom
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async getAllClassRoom(req, res, next) {
        try {
            const classRoom = await ClassRoomService.getAllClassRoom();
            if (!classRoom) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: classRoom
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async createClassRoom(req, res, next) {
        try {
            const newClassRoom = await ClassRoomService.createClassRoom(req.body);
            if (!newClassRoom) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: newClassRoom
            });
        } catch (error) {
            console.log(error);
            if (error.name == "SequelizeForeignKeyConstraintError") {
                return next(createError.BadRequest("Lỗi nhập khóa phụ không trùng với dữ liệu"))
            }
            return next(createError.InternalServerError());
        }
    }
    static async updateClassRoom(req, res, next) {
        try {

            const {classRoomId, ...value} = req.body
            const classRoom = await ClassRoomService.updateClassRoom(classRoomId, value);
            if (!classRoom) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: classRoom,
                
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async deleteClassRoomById(req, res, next) {
        try {
            console.log(req.params.classRoomId)
            const ClassRoom = await ClassRoomService.deleteClassRoomById(req.params.classRoomId);
            if(ClassRoom <=0){
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: 'done'
            })
        } catch (error) {
            console.log(error);
            if (error.name == "SequelizeForeignKeyConstraintError") {
                return next(createError.BadRequest("Lỗi nhập khóa phụ không trùng với dữ liệu"))
            }
            return next(createError.InternalServerError());
        }
    }
    
}

module.exports = ClassRoomController;
