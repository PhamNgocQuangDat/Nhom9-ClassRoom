const createError = require('http-errors');
const { hashPassword } = require("../helpers/password-crypt");
const CourseStudentService = require("../services/course-student-service");

class CourseStudentController {
    // user role
    static async getCourseStudentById(req, res, next) {
        try {
            const CourseStudent = await CourseStudentService.getCourseStudentById(req.params.courseStudentId);
            if (!CourseStudent) {
               
                return next(createError.BadRequest( `Không tìm được CourseStudent với id là ${req.params.courseStudentId}`))
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: CourseStudent
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async getAllCourseStudent(req, res, next) {
        try {
            const CourseStudents = await CourseStudentService.getAllCourseStudent();
            if (!CourseStudents) {
              return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: CourseStudents
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async createCourseStudent(req, res, next) {
        try {
            const CourseStudent = await CourseStudentService.createCourseStudent(req.body);
            if (!CourseStudent) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: CourseStudent
            });
        } catch (error) {
            console.log(error);
            if (error.name == "SequelizeForeignKeyConstraintError") {
                return next(createError.BadRequest("Lỗi nhập khóa phụ không trùng với dữ liệu"))
            }
            return next(createError.InternalServerError());
        }
    }
    static async createCourseStudents(req, res, next) {
        try {
            const CourseStudents = await CourseStudentService.createMultipleCourseStudents(req.body);
            if (!CourseStudents) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: CourseStudents
            });
        } catch (error) {
            console.log(error);
            if (error.name == "SequelizeForeignKeyConstraintError") {
                return next(createError.BadRequest("Lỗi nhập khóa phụ không trùng với dữ liệu"))
            }
            return next(createError.InternalServerError());
        }
    }
    static async updateCourseStudent(req, res, next) {
        try {

            const {courseStudentId, ...value} = req.body
            const CourseStudent = await CourseStudentService.updateCourseStudent(courseStudentId, value);
            if (!CourseStudent) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: CourseStudent,
                
            })
        } catch (error) {
            console.log(error);
            if (error.name == "SequelizeForeignKeyConstraintError") {
                return next(createError.BadRequest("Lỗi nhập khóa phụ không trùng với dữ liệu"))
            }
            return next(createError.InternalServerError());
        }
    }
    static async deleteCourseStudentById(req, res, next) {
        try {

            const CourseStudent = await CourseStudentService.deleteCourseStudentById(req.params.courseStudentId);
            if(CourseStudent <=0){
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

module.exports = CourseStudentController;
