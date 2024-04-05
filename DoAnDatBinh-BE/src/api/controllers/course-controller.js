const createError = require('http-errors');
const { hashPassword } = require("../helpers/password-crypt");
const CourseService = require("../services/course-service");

class CourseController {
    // user role
    static async getCourseById(req, res, next) {
        try {
            const course = await CourseService.getCourseById(req.params.courseId);
            if (!course) {
              
                return next(createError.BadRequest(`Không tìm được Course với id là ${req.params.courseId}`))
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: course
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async getAllCourse(req, res, next) {
        try {
            const courses = await CourseService.getAllCourse();
            if (!courses) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: courses
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async createCourse(req, res, next) {
        try {
            const course = await CourseService.createCourse(req.body);
            if (!course) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: course
            });
        } catch (error) {
            console.log(error);
            if (error.name == "SequelizeForeignKeyConstraintError") {
                return next(createError.BadRequest("Lỗi nhập khóa phụ không trùng với dữ liệu"))
            }
            return next(createError.InternalServerError());
        }
    }
    static async updateCourse(req, res, next) {
        try {

            const {courseId, ...value} = req.body
            const course = await CourseService.updateCourse(courseId, value);
            if (!course) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: course,
                
            })
        } catch (error) {
            console.log(error);
            if (error.name == "SequelizeForeignKeyConstraintError") {
                return next(createError.BadRequest("Lỗi nhập khóa phụ không trùng với dữ liệu"))
            }
            return next(createError.InternalServerError());
        }
    }
    static async deleteCourseById(req, res, next) {
        try {

            const course = await CourseService.deleteCourseById(req.params.courseId);
            if(course <=0){
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

module.exports = CourseController;
