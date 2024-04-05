const createError = require('http-errors');
const { hashPassword } = require("../helpers/password-crypt");
const LessonService = require("../services/lesson-service");

class LessonController {
    // user role
    static async getLessonById(req, res, next) {
        try {
            const Lesson = await LessonService.getLessonById(req.params.lessonId);
            if (!Lesson) {
               
                return next(createError.BadRequest( `Không tìm được Lesson với id là ${req.params.lessonId}`))
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: Lesson
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async getAllLesson(req, res, next) {
        try {
            const Lessons = await LessonService.getAllLesson();
            if (!Lessons) {
              return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: Lessons
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async createLesson(req, res, next) {
        try {
            const Lesson = await LessonService.createLesson(req.body);
            if (!Lesson) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: Lesson
            });
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async createLessons(req, res, next) {
        try {
            const Lessons = await LessonService.createMultipleLessons(req.body);
            if (!Lessons) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: Lessons
            });
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async updateLesson(req, res, next) {
        try {

            const {lessonId, ...value} = req.body
            const Lesson = await LessonService.updateLesson(lessonId, value);
            if (!Lesson) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: Lesson,
                
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async deleteLessonById(req, res, next) {
        try {

            const Lesson = await LessonService.deleteLessonById(req.params.lessonId);
            if(Lesson <= 0){
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

module.exports = LessonController;
