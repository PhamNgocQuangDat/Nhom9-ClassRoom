const createError = require('http-errors');
const { hashPassword } = require("../helpers/password-crypt");
const CourseTeacherService = require("../services/course-teacher-service");

class CourseTeacherController {
    // user role
    static async getCourseTeacherById(req, res, next) {
        try {
            const CourseTeacher = await CourseTeacherService.getCourseTeacherById(req.params.courseTeacherId);
            if (!CourseTeacher) {
              
                return next(createError.BadRequest(`Không tìm được CourseTeacher với id là ${req.params.courseTeacherId}`))
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: CourseTeacher
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async getAllCourseTeacher(req, res, next) {
        try {
            const CourseTeachers = await CourseTeacherService.getAllCourseTeacher();
            if (!CourseTeachers) {
              return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: CourseTeachers
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async createCourseTeacher(req, res, next) {
        try {
            const CourseTeacher = await CourseTeacherService.createCourseTeacher(req.body);
            if (!CourseTeacher) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: CourseTeacher
            });
        } catch (error) {
            console.log(error);
            if (error.name == "SequelizeForeignKeyConstraintError") {
                return next(createError.BadRequest("Lỗi nhập khóa phụ không trùng với dữ liệu"))
            }
            return next(createError.InternalServerError());
        }
    }
    static async updateCourseTeacher(req, res, next) {
        try {

            const {courseTeacherId, ...value} = req.body
            const CourseTeacher = await CourseTeacherService.updateCourseTeacher(courseTeacherId, value);
            if (!CourseTeacher) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: CourseTeacher,
                
            })
        } catch (error) {
            console.log(error);
            if (error.name == "SequelizeForeignKeyConstraintError") {
                return next(createError.BadRequest("Lỗi nhập khóa phụ không trùng với dữ liệu"))
            }
            return next(createError.InternalServerError());
        }
    }
    static async deleteCourseTeacherById(req, res, next) {
        try {

            const CourseTeacher = await CourseTeacherService.deleteCourseTeacherById(req.params.courseTeacherId);
            if(CourseTeacher <=0){
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

module.exports = CourseTeacherController;
