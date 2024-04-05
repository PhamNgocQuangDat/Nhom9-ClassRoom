const createError = require('http-errors');
const { hashPassword } = require("../helpers/password-crypt");
const StudentService = require("../services/student-service");
const AccountService = require('../services/account-service');

class StudentController {
    // user role
    static async getStudentById(req, res, next) {
        try {
            const student = await StudentService.getStudentById(req.params.studentId);
            if (!student) {
                
                return next(createError.BadRequest(`Không tìm được Student với id là ${req.params.studentId}`))
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: student
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async getAllStudent(req, res, next) {
        try {
            const students = await StudentService.getAllStudent();
            if (!students) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: students
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async createStudent(req, res, next) {
        try {
            const checkStudent = await StudentService.getStudentById(req.body.studentId);
            if(checkStudent){
                return next(createError.BadRequest(`Đã có học sinh dùng id ${req.body.studentId}`))
            }
            const student = await StudentService.createStudent(req.body);
            if (!student) {
                return next(createError.InternalServerError());
            }
            const accountData = {
                studentId: student.studentId,
                password: await hashPassword("123456"),
            }
            const account = await AccountService.createAccount(accountData);
            if(!account){
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: student
            });
        } catch (error) {
            console.log(error);
            if (error.name == "SequelizeForeignKeyConstraintError") {
                return next(createError.BadRequest("Lỗi nhập khóa phụ không trùng với dữ liệu"))
            }
            return next(createError.InternalServerError());
        }
    }
    static async updateStudent(req, res, next) {
        try {

            const {studentId, ...value} = req.body
            const student = await StudentService.updateStudent(studentId, value);
            if (!student) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: student,
                
            })
        } catch (error) {
            console.log(error);
            if (error.name == "SequelizeForeignKeyConstraintError") {
                return next(createError.BadRequest("Lỗi nhập khóa phụ không trùng với dữ liệu"))
            }
            return next(createError.InternalServerError());
        }
    }
    static async deleteStudentById(req, res, next) {
        try {
            const student = await StudentService.deleteStudentById(req.params.studentId);
            if(student<=0){
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

module.exports = StudentController;
