const createError = require('http-errors');
const { hashPassword } = require("../helpers/password-crypt");
const SemesterService = require("../services/semester-service");

class SemesterController {
    // user role
    static async getSemesterById(req, res, next) {
        try {
            const Semester = await SemesterService.getSemesterById(req.params.semesterId);
            if (!Semester) {
               
                return next(createError.BadRequest( `Không tìm được Semester với id là ${req.params.semesterId}`))
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: Semester
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async getAllSemester(req, res, next) {
        try {
            const Semesters = await SemesterService.getAllSemester();
            if (!Semesters) {
              return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: Semesters
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async createSemester(req, res, next) {
        try {
            const Semester = await SemesterService.createSemester(req.body);
            if (!Semester) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: Semester
            });
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async updateSemester(req, res, next) {
        try {

            const {semesterId, ...value} = req.body
            const Semester = await SemesterService.updateSemester(semesterId, value);
            if (!Semester) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: Semester,
                
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async deleteSemesterById(req, res, next) {
        try {

            const Semester = await SemesterService.deleteSemesterById(req.params.semesterId);
            if(Semester <= 0){
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

module.exports = SemesterController;
