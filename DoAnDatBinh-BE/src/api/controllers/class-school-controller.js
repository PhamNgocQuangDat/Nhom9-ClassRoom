const createError = require('http-errors');
const { hashPassword } = require("../helpers/password-crypt");
const ClassSchoolService = require("../services/class-school-service");

class ClassSchoolController {
    // user role
    static async getClassSchoolById(req, res, next) {
        try {
            const ClassSchool = await ClassSchoolService.getClassSchoolById(req.params.classSchoolId);
            if (!ClassSchool) {
               
                return next(createError.BadRequest(`Không tìm được ClassSchool với id là ${req.params.classSchoolId}`))
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: ClassSchool
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async getAllClassSchool(req, res, next) {
        try {
            const ClassSchool = await ClassSchoolService.getAllClassSchool();
            if (!ClassSchool) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: ClassSchool
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async createClassSchool(req, res, next) {
        try {
            const newClassSchool = await ClassSchoolService.createClassSchool(req.body);
            if (!newClassSchool) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: newClassSchool
            });
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async updateClassSchool(req, res, next) {
        try {

            const {classSchoolId, ...value} = req.body
            const ClassSchool = await ClassSchoolService.updateClassSchool(classSchoolId, value);
            if (!ClassSchool) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: ClassSchool,
                
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async deleteClassSchoolById(req, res, next) {
        try {
            console.log(req.params.classSchoolId)
            
            const ClassSchool = await ClassSchoolService.deleteClassSchoolById(req.params.classSchoolId);
            if(ClassSchool <= 0){
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

module.exports = ClassSchoolController;
